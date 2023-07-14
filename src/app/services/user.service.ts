import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginModel } from '../models/login.model';
import { Observable, map, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
    baseApiUrl: string = `${environment.apiUrl}/users`;

    constructor(private httpClient: HttpClient) { }

    login(loginModel: LoginModel): Observable<any> {
        let url = `${this.baseApiUrl}?email=${loginModel.mail}&password=${loginModel.password}`;

        return this.httpClient.get<any[]>(url).pipe(
            map(users => users[0]),
            tap(user => {
                if (user)
                    localStorage.setItem('token', user.token!);
            })
        );
    }

}