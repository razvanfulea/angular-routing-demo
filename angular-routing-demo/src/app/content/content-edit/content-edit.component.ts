import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './content-edit.component.html'
})
export class ContentEditComponent implements OnInit{
    value: number;

    constructor(
        private route: ActivatedRoute
    ) {}

    ngOnInit(){
        // Constantly watch for route-params changes
        this.route.paramMap.subscribe(
            params => {
                this.value = parseInt(params.get('id'));
                console.log(params.get('id'))
            }
        )
    }

} 