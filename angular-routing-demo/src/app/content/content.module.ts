import { NgModule } from '@angular/core';
import { ContentComponent } from './content.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { ContentEditComponent } from './content-edit/content-edit.component';
import { ContentResolver } from './content-resolver.service';
import { ContentService } from './content.service';
import { ContentEditInfoComponent } from './content-edit/content-edit-info/content-edit-info.component';
import { ContentEditTagsComponent } from './content-edit/content-edit-tags/content-edit-tags.component';
import { ActivationGuard } from '../guards/activation.guard';
import { DeactivationGuard } from '../guards/deactivation.guard';

const routes = [
    { 
        path: 'content', 
        canActivate: [ActivationGuard],
        children: [
            {
                path: '',
                component: ContentComponent
            },
            { 
                path: ':id', 
                component: ContentDetailComponent,
                resolve: {resolvedContent: ContentResolver} 
            },
            { 
                path: ':id/edit', 
                component: ContentEditComponent,
                resolve: {resolvedContent: ContentResolver},
                canDeactivate: [DeactivationGuard],
                children: [
                    { path: '', redirectTo: 'info', pathMatch: 'full' },
                    { path: 'info', component: ContentEditInfoComponent },
                    { path: 'tags', component: ContentEditTagsComponent }
                ]
            }
        ]
    },
    
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        ContentComponent,
        ContentDetailComponent,
        ContentEditComponent,
        ContentEditInfoComponent,
        ContentEditTagsComponent
    ],
    providers: [
        ContentService,
        ContentResolver
    ]
})
export class ContentModule{}