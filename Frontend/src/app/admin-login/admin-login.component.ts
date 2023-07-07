import { Component, OnInit } from '@angular/core';
import { Auth1serviceService } from '../service/auth1service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ChoiceService } from '../services/choice.service';
import { LoggedUserService } from '../services/logged-user.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  ngOnInit(): void {
   
  }
  alert(){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Signed in successfully'
    })
  }
  isloggedin = false;
  constructor(private authService: Auth1serviceService, private router: Router, private choice : ChoiceService,
    private log : LoggedUserService) {}
  login(): void {
    if (this.email === 'admin@gmail.com' && this.password === 'admin123') {
      this.authService.login();
      this.choice.isAdmin = true;
      this.isloggedin = true;
      this.log.isloggedIn = this.isloggedin;
      this.router.navigate(['/dashboard']);
      this.alert();
    } else {
      this.router.navigate(['/access-denied']);
    }
  }
}
