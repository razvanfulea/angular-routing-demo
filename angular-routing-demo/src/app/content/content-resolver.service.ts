import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Content } from './content';
import { Observable } from 'rxjs';
import { ContentService } from './content.service';

@Injectable()
export class ContentResolver implements Resolve<Content> {

    constructor(private contentService: ContentService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Content> {
        const id = +route.paramMap.get('id');
        return this.contentService.getContent(id);
    }

}