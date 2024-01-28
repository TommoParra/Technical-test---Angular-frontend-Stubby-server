// auth.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (!localStorage.getItem('securityKey')) {
      // If no security key, navigate to the login page or perform other actions as needed
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
