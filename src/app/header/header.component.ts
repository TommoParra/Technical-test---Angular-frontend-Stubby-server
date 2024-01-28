import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  isLoggedIn(): boolean {
    // Check if the user is logged in based on your authentication mechanism
    return localStorage.getItem('securityKey') !== null;
  }

  logout(): void {
    // Implement logout logic, e.g., clear the securityKey from localStorage
    localStorage.removeItem('securityKey');
  }
}