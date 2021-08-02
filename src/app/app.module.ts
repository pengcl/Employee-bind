import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';

import {ThemeModule} from './@theme/theme.module';

import {INTERCEPTORS} from './@core/interceptors';


import {AppComponent} from './app.component';

import {environment} from '../environments/environment';
import {PAGES} from './pages';
import {CoreModule} from './@core/core.module';
import {FormsModule} from '@angular/forms';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';




@NgModule({
  declarations: [
    AppComponent,
    ...PAGES,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    ThemeModule.forRoot(),
    FormsModule,
    ThemeModule,
    InfiniteScrollModule,
  ],
  providers: [
    INTERCEPTORS,
    {provide: 'PREFIX_URL', useValue: environment.prefix_url},
    {provide: 'FILE_PREFIX_URL', useValue: environment.FILE_PREFIX_URL}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
