import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, Page1Component, Page2Component, HomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '1',
        component: Page1Component
      },
      {
        path: '2',
        component: Page2Component
      },
      {
        path: '**',
        component: HomeComponent
      }
    ], { initialNavigation: 'enabled' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
