import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentService } from './content.service';
import { Content } from './content';
import { MessageService } from '../message/message.service';

@Component({
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

    contents: Array<Content> = [];

    constructor(
        private contentService: ContentService,
        private messageService: MessageService,
        private _router: Router
    ){ }

    ngOnInit(){
        this.contentService.getContents().subscribe(
            res => this.contents = res,
            err => console.log(err)
        )
    }

    goToDetail(contentId: any){
        this.messageService.addMessage(`Navigated to detail #${contentId}`);
        this._router.navigate(['/content', contentId]);
    }

}