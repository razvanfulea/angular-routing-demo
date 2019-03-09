import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MessageComponent } from './message.component';
import { RouterModule } from '@angular/router';

const routes = [
    { 
        path: 'messages',
        component: MessageComponent,
        outlet: 'popup'
    }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        MessageComponent
    ]
})
export class MessageModule {}