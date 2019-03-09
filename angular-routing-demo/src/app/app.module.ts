import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { AboutModule } from './about/about.module';
import { HelpModule } from './help/help.module';
import { ContentModule } from './content/content.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ContentData } from './content/content-data';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    AboutModule,
    HelpModule,
    ContentModule,
    PageNotFoundModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(ContentData, {delay: 1000}),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
