import { Component } from '@angular/core';
import { Auth1serviceService } from '../service/auth1service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  email: string = '';
  password: string = '';

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
  constructor(private authService: Auth1serviceService, private router: Router) {}
  login(): void {
    if (this.email === 'admin@gmail.com' && this.password === 'admin123') {
      this.authService.login();
      this.router.navigate(['/dashboard']);
      this.alert();
    } else {
      this.router.navigate(['/access-denied']);
    }
  }
}
