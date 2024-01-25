import { Component } from '@angular/core';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.css'],
})
export class JobListingComponent {
  userInfo: any;
  jobList:any[]=[]
  constructor(private jobserv: JobService) {
    const userData = localStorage.getItem('jobLoginUser');
    if (userData !== null) {
      this.userInfo = JSON.parse(userData);
      this.getJobsByEmployer()
    }
  }
  getJobsByEmployer(){
    this.jobserv.getJobsByEmployerId(this.userInfo.employerId).subscribe((res:any)=>{
      this.jobList=res.data
    })
  }
}
