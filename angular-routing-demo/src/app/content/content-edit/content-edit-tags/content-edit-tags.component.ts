import { Component, OnInit } from '@angular/core';
import { Content } from '../../content';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './content-edit-tags.component.html'
})
export class ContentEditTagsComponent implements OnInit {
    content: Content

    constructor(
        private route: ActivatedRoute
    ) {}

    ngOnInit(){
        this.route.parent.data.subscribe(data => {
            this.content = data['resolvedContent'];
        });
    }

}