import { NgModule } from '@angular/core';
import { HelpComponent } from './help.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

const routes = [
    { path: 'help', component: HelpComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        HelpComponent
    ]
})
export class HelpModule{}