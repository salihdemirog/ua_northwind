import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { User } from 'src/app/models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {

    constructor() { }

    getToken() {
        return localStorage.getItem('token');
    }

    getActiveUser(): User | null {
        let token = this.getToken();
        let jwtHelper = new JwtHelperService();
        if (token) {
            var decode = jwtHelper.decodeToken(token)
            return {
                email:decode['Email'],
                firstName:decode['FirstName'],
                id:'1',
                lastName:decode['LastName']
            }
        }

        return null;
    }

    public get isAuth(): boolean {

        let jwtHelper = new JwtHelperService();
        return !!this.getToken() && !jwtHelper.isTokenExpired(this.getToken());
    }

}