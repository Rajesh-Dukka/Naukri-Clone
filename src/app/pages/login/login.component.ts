import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginObj: any = {
    UserName: '',
    Password: '',
  };
  constructor(private jobservice: JobService, private router: Router) {}
  onLogin() {
    this.jobservice.login(this.loginObj).subscribe((res: any) => {
      if (res.result) {
        alert('user Logged in success');
        localStorage.setItem('jobLoginUser', JSON.stringify(res.data));
        console.log(res.data);
        this.router.navigateByUrl('/home');
      } else {
        alert(res.message);
      }
    });
  }
}
