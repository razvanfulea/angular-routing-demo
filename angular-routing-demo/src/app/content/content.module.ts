import { NgModule } from '@angular/core';
import { ContentComponent } from './content.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { ContentEditComponent } from './content-edit/content-edit.component';
import { ContentResolver } from './content-resolver.service';
import { ContentService } from './content.service';

const routes = [
    { path: 'content', component: ContentComponent },
    { path: 'content/:id', component: ContentDetailComponent,
        resolve: {resolvedContent: ContentResolver} },
    { path: 'content/:id/edit', component: ContentEditComponent,
        resolve: {resolvedContent: ContentResolver} }
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
    ],
    providers: [
        ContentService,
        ContentResolver
    ]
})
export class ContentModule{}