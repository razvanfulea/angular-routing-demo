import { NgModule } from '@angular/core';
import { ContentComponent } from './content.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

const routes = [
    { path: 'content', component: ContentComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        ContentComponent
    ]
})
export class ContentModule{}