import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class JwtTokenInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let token = this.authService.getToken();

        // if (token) {
            const headers = req.headers
                .set('Authorization', `Bearer ${token}`);
            const authReq = req.clone({ headers });
            return next.handle(authReq);
        // }

        // return next.handle(req);
    }
}