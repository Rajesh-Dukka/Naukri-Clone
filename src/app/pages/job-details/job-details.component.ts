import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css'],
})
export class JobDetailsComponent {
  activeJobId: number = 0;
  jobObj: any;
  userInfo: any;
  isLoggedIn: boolean = false;
  jobApplicationObj = {
    ApplicationId: 0,
    JobId: 0,
    JobSeekerId: 0,
    AppliedDate: '2024-01-23T12:35:14.181Z',
    ApplcationStatus: 'New',
  };

  constructor(
    private jobserv: JobService,
    private activateRoute: ActivatedRoute
  ) {
    const userData = localStorage.getItem('jobLoginUser');
    if (userData == null) {
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
      this.userInfo = JSON.parse(userData);
      this.jobApplicationObj.JobSeekerId=this.userInfo.jobSeekerId
    }
    activateRoute.params.subscribe((res: any) => {
      debugger;
      this.activeJobId = res.jobid;
      this.getJobDetails();
      this.jobApplicationObj.JobId=this.activeJobId
    });
  }
  getJobDetails() {
    this.jobserv.getJobListsingById(this.activeJobId).subscribe((res: any) => {
      this.jobObj = res.data;
    });
  }
  apply(){
    this.jobserv.sendJobApplication(this.jobApplicationObj).subscribe((res:any)=>{
      if (res.result){
        alert("You Have Successfully Applied to job")
      }else{
        alert(res.message)
      }
    })
  }
}
