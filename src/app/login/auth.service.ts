// auth.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;

  authenticate(username: string, password: string): Observable<any> {
    // Replace this with your own logic to check username and password
    if (username === 'dummyUsername' && password === 'dummyPassword') {
      // Simulate a successful authentication with a dummy user
      const dummyUser = { username: 'dummyUsername' };
      this.isAuthenticated = true;
      return of(dummyUser);
    } else {
      // Simulate authentication failure
      this.isAuthenticated = false;
      return of(null);
    }
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
