import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './content-detail.component.html'
})
export class ContentDetailComponent implements OnInit{
    value: number;

    constructor(
        private _router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(){
        this.value = parseInt(this.route.snapshot.paramMap.get('id'));
    }

    goToEdit(){
        this._router.navigateByUrl('/content/' + this.value + '/edit');
    }

}