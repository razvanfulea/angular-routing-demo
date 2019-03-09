import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentService } from './content.service';
import { Content } from './content';

@Component({
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

    contents: Array<Content> = [];

    constructor(
        private contentService: ContentService,
        private _router: Router
    ){ }

    ngOnInit(){
        this.contentService.getContents().subscribe(
            res => this.contents = res,
            err => console.log(err)
        )
    }

    goToDetail(contentId: any){
        this._router.navigate(['/content', contentId]);
    }

}