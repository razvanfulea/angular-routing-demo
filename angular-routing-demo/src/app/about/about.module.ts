import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

const routes = [
    { path: 'about', component: AboutComponent }
]

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        AboutComponent
    ]
})
export class AboutModule{}