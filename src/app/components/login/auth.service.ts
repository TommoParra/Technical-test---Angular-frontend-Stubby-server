import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private authenticatedUsername: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  authenticate(username: string, password: string): Observable<any> {
    // Replace this with your own logic to check username and password
    if (username === 'dummyUsername' && password === 'dummyPassword') {
      // Simulate a successful authentication with a dummy user
      const dummyUser = { username: 'dummyUsername' };
      
      this.isAuthenticated = true;
      this.authenticatedUsername.next(dummyUser.username);

      return of(dummyUser);
    } else {
      // Simulate authentication failure
      this.isAuthenticated = false;
      this.authenticatedUsername.next(null);

      return of(null);
    }
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  getAuthenticatedUsername(): Observable<string | null> {
    return this.authenticatedUsername.asObservable();
  }
}
