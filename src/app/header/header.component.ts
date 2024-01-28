import { Component, OnInit } from '@angular/core';
import { AuthService } from '../components/login/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  username$ = this.authService.getAuthenticatedUsername();
  showLoginButton: boolean = true;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.authenticate('dummyUsername', 'dummyPassword').subscribe();
  }

  isLoggedIn(): boolean {
    // Check if the user is logged in based on your authentication mechanism
    return localStorage.getItem('securityKey') !== null;
  }

  logout(): void {
    // Implement logout logic, e.g., clear the securityKey from localStorage
    localStorage.removeItem('securityKey');
    window.location.reload();
  }

  login(): void {
    // Your login logic here
    this.showLoginButton = !this.showLoginButton; // Set the flag to hide the login button
  }
}
