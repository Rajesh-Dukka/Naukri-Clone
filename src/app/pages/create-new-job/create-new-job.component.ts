import { JsonPipe } from '@angular/common';
import { JsonpInterceptor } from '@angular/common/http';
import { Component , OnInit } from '@angular/core';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-create-new-job',
  templateUrl: './create-new-job.component.html',
  styleUrls: ['./create-new-job.component.css'],
})
export class CreateNewJobComponent implements OnInit {
  jobObj: any = {
    JobId: 0,
    JobName: '',
    CreatedDate: new Date(),
    EmployerId: 0,
    CategoryId: 0,
    Experience: '',
    Package: '',
    Location: '',
    JobDescription: '',
    IsActive: true,
  };
  categoryList:any[]=[]
  constructor(private jobserv:JobService){
    const userData = localStorage.getItem('jobLoginUser');
    if (userData != null){
      const data=JSON.parse(userData)
      this.jobObj.EmployerId=data.employerId
    }
  }
  ngOnInit(): void {
    this.getJobcategories();
  }

  getJobcategories(){
    this.jobserv.getAllCategory().subscribe((res:any)=>{
      this.categoryList=res.data
    })
  }
  createJob(){
    this.jobserv.createNewJob(this.jobObj).subscribe((res:any)=>{
      if(res.result){
        alert("post Created Success")
      }else{
        alert(res.message)
      }
    })
  }

}
