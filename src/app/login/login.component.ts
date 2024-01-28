import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.initLoginForm();
  }

  private initLoginForm(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.loginForm) {
      const username = this.loginForm.get('username')!.value;
      const password = this.loginForm.get('password')!.value;
  
      this.authService.authenticate(username, password).subscribe(
        response => {
          console.log('Authentication response:', response);
          if (response) {
            
            const securityKey = 'DummySecurityKey'; 
            localStorage.setItem('securityKey', securityKey);
            window.location.reload();
          } else {
            
            console.error('Authentication failed. Please check your credentials.');
            
          }
        },
        error => {
          console.error('Authentication error:', error);
          // Handle unexpected errors or display a generic error message to the user
        }
      );
    }
  }
  
}
