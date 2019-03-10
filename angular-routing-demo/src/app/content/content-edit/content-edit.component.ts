import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../content.service';
import { Content } from '../content';

@Component({
    templateUrl: './content-edit.component.html',
    styleUrls: ['./content-edit.component.scss']
})
export class ContentEditComponent implements OnInit{

    private dataIsValid: { [key: string]: boolean} = {};

    private currentContent: Content;
    private originalContent: Content;

    get content(): Content {
        return this.currentContent;
    }

    set content(value: Content){
        this.currentContent = value;
        // Clone the object to retain a copy
        this.originalContent = { ...value };
    }

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

    reset() {
        this.dataIsValid = null;
        this.currentContent = null;
        this.originalContent = null;
    }

    onSave(){
        if (this.isValid()){
            this.contentService.save(this.content).subscribe(
                _ => {
                    this.reset();
                    alert("Content saved!");
                },
                err => console.log(err)
            );
        } else {
            alert("ERROR");
        }
    }

    validate() {
        this.dataIsValid = {};

        // Validate 1st tab
        if (this.content.name && this.content.name.length > 3 && this.content.description){
            this.dataIsValid['info'] = true;
        } else {
            this.dataIsValid['info'] = false;
        }

        // Validate 2nd tab
        if (this.content.name && this.content.name.length % 2 == 0 /*perform some better validations*/){
            this.dataIsValid['tags'] = true;
        } else {
            this.dataIsValid['tags'] = false;
        }
    }

    isValid(path?: string): boolean{
        this.validate();
        if (path){
            return this.dataIsValid[path];
        }
        return (this.dataIsValid &&
            Object.keys(this.dataIsValid).every(d => this.dataIsValid[d] === true));
    }

    get isDirty(): boolean {
        return JSON.stringify(this.originalContent) != JSON.stringify(this.currentContent);
    }

} 