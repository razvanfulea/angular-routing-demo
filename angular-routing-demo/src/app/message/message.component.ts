import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './message.component.html'
})
export class MessageComponent implements OnInit {
    messages: Array<string>;

    constructor(
        private messageService: MessageService,
        private router: Router
    ){}

    ngOnInit(){
        this.messages = this.messageService.messages;
    }

    close(){
        this.router.navigate([{ outlets: { popup: null } }]);
        this.messageService.isDisplayed = false;
    }

}