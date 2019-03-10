import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

const routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'unauthorized', component: UnauthorizedComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
            {enableTracing: true} 
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}