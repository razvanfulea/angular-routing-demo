import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ActivationGuard implements CanActivate {
    path: ActivatedRouteSnapshot[];
    route: ActivatedRouteSnapshot;

    constructor(
        private router: Router
    ) {}

    canActivate(
        next: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean{
        // Pick a bettet login for authorizing
        let value = Math.random();
        if (value > 0.5){
            return true;
        } else {
            this.router.navigateByUrl('/unauthorized');
            return false;
        }
    }
}