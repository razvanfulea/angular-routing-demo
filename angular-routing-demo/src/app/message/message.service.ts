import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MessageService {
    private _messages: string[] = ["Demo message"];
    isDisplayed: boolean = false;

    get messages(): string[] {
        return this._messages;
    }

    addMessage(message: string) {
        const currentDate = new Date();
        this.messages.unshift(message + ' at ' + currentDate.toLocaleString());
    }
}