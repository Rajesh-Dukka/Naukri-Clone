import { Component } from '@angular/core';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  employerObj: any = {
    EmployerId: 0,
    CompanyName: '',
    EmailId: '',
    MobileNo: '',
    PhoneNo: '',
    CompanyAddress: '',
    City: '',
    State: '',
    PinCode: '',
    LogoURL: '',
    GstNo: '',
  };
  jobseekerObj: any = {
    JobSeekerId: 0,
    FullName: '',
    EmailId: '',
    MobileNo: '',
    ExperienceStatus: '',
    ResumeUrl: '',
    JobSeekerSkills: [],
    JobSeekerWorkExperiences: [],
  };
  isJobSeeker!: boolean;
  constructor(private jobservice: JobService) {}

  register() {
    this.jobservice.registerEmployer(this.employerObj).subscribe((res: any) => {
      if (res.result) {
        alert(res.message);
      } else {
        alert(res.message);
      }
    });
  }
  registerAsJobSeeker() {
    this.jobservice
      .registerAsJobSeeker(this.jobseekerObj)
      .subscribe((res: any) => {
        if (res.result) {
          alert(res.message);
        } else {
          alert(res.message);
        }
      });
  }
}
