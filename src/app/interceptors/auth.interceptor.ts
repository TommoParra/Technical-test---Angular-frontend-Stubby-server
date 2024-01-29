import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const securityKey = localStorage.getItem('securityKey');

    if (!securityKey) {
      const errorMessage = 'To see the airport list, please login.';
      const errorResponse = {
        status: 401,
        statusText: errorMessage,
        customError: true,
      };
      return of(new HttpResponse(errorResponse));
    }

    
    const authRequest = request.clone({
      setHeaders: { securityKey },
    });

    return next.handle(authRequest).pipe(
      catchError((error) => {
        
        return of(error);
      })
    );
  }
}
