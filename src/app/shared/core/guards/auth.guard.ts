import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { CanMatchFn, Route, Router, UrlSegment } from '@angular/router';

export const authCanActivatedGuardFn: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
) => {
    let authService = inject(AuthService);
    return authService.isAuth;
}

export const authCanMatchGuard: CanMatchFn = (
    route: Route,
    segments: UrlSegment[]
) => {
    let isAuth: boolean = inject(AuthService).isAuth;
    let router: Router = inject(Router);

    return isAuth ? true : router.parseUrl('/account/login');
    
    // if (!isAuth) {

    //     inject(Router).navigateByUrl('/account/login');
    //     return false;
    // }

    // return true;

}


// class OldGuard implements CanActivate {

//     constructor(private authService: AuthService) { }

//     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
//         return this.authService.isAuth;
//     }

// }