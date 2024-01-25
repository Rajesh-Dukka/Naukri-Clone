import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
})
export class JobsComponent implements OnInit {
  jobList : any[]=[]
  constructor(private jobServ: JobService, private router:Router) {}
  ngOnInit(): void {
    this.loadJobs()
  }

  loadJobs(){
    this.jobServ.getActiveJobs().subscribe((res:any)=>{
      this.jobList=res.data
    })
  }
  openJob(id:number){
    this.router.navigate(['/job-detail',id])
  }
}
