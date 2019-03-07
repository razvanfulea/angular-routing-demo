import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

    values: Array<number> = [];

    constructor(
        private _router: Router
    ){ }

    ngOnInit(){
        for (let i = 1; i <= 10; i++){
            this.values.push(i);
        }
    }

    goToDetail(value: any){
        this._router.navigate(['/content', value]);
    }

}