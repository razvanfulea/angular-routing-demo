import { Component } from '@angular/core';
import { myTransitionAnimation } from './app.animation';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { MessageService } from './message/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [myTransitionAnimation]
})
export class AppComponent {
  title = 'angular-routing-demo';
  loading = true;

  get isMessageDisplayed(): boolean {
    return this.messageService.isDisplayed;
  }

  constructor(
    private router: Router,
    private messageService: MessageService
  ) {
    router.events.subscribe((routerEvent: Event) => {
      this.checkRouterEvent(routerEvent);
    });
  }
  
  private checkRouterEvent(event: Event){
    if (event instanceof NavigationStart){
      this.loading = true;
    }
    if (event instanceof NavigationEnd ||
      event instanceof NavigationCancel ||
      event instanceof NavigationError){
        this.loading = false;
    }
  }

  displayMessages() {
    this.router.navigate([{ outlets: { popup: ['messages'] } }]);
    this.messageService.isDisplayed = true;
  }

  hideMessages() {
    this.router.navigate([{ outlets: { popup: null } }]);
    this.messageService.isDisplayed = false;
  }
}
