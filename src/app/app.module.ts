import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InterceptService} from '../services/interceptors/http-interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpService } from '../services/http-service/http-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    HttpClientModule,
    HttpService,
    InterceptService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
