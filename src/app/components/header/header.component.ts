import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';

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
    
    return localStorage.getItem('securityKey') !== null;
  }

  logout(): void {
    
    localStorage.removeItem('securityKey');
    window.location.reload();
  }

  login(): void {
    
    this.showLoginButton = !this.showLoginButton; 
  }
}
