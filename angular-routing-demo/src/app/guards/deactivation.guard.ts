import { ContentEditComponent } from '../content/content-edit/content-edit.component';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DeactivationGuard implements CanDeactivate<ContentEditComponent> {
    
    canDeactivate(
        component: ContentEditComponent,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean> {
        if (component.isDirty){
            const name = component.content.name;
            return confirm(`Navigate away from ${name}?`);
        }
        return true;
    }
}