import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,],
  providers: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  register: any;
  
  constructor(private fb: FormBuilder,private router: Router) {
     this.register = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
     });
  }


  login() {
    this.router.navigate(['/admin/business/clients']);
    localStorage.setItem('auth', 'true');
    localStorage.setItem('role', 'business');
    
    // this.authService.login(this.register.value).subscribe((response: any) => {
    //   this.authService.saveToken(response.access_token);
    // });
  }

}
