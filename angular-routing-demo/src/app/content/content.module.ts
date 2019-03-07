import { NgModule } from '@angular/core';
import { ContentComponent } from './content.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { ContentEditComponent } from './content-edit/content-edit.component';

const routes = [
    { path: 'content', component: ContentComponent },
    { path: 'content/:id', component: ContentDetailComponent },
    { path: 'content/:id/edit', component: ContentEditComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        ContentComponent,
        ContentDetailComponent,
        ContentEditComponent
    ]
})
export class ContentModule{}