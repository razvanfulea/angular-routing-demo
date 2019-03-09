import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Content } from '../content';

@Component({
    templateUrl: './content-detail.component.html'
})
export class ContentDetailComponent implements OnInit{
    content: Content;

    constructor(
        private _router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(){
        const resolvedContent: Content = this.route.snapshot.data['resolvedContent'];
        this.content = resolvedContent;
    }

    goToEdit(){
        this._router.navigateByUrl('/content/' + this.content.id + '/edit');
    }

}