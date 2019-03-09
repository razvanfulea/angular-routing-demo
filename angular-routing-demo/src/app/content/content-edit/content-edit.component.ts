import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../content.service';
import { Content } from '../content';

@Component({
    templateUrl: './content-edit.component.html'
})
export class ContentEditComponent implements OnInit{
    content: Content;

    constructor(
        private contentService: ContentService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(){
        // Constantly watch for route data changes
        this.route.data.subscribe(
            data => {
                const resolvedContent: Content = data['resolvedContent'];
                this.content = resolvedContent;
            }
        );
    }

    onSubmit(){
        this.contentService.save(this.content).subscribe(
            _ => alert("Saved successfully"),
            err => console.log(err)
        );
    }

} 