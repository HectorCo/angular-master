import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {GlobalsModule} from './globals/globals.module';
import {FormManagerModule} from './form-manager/form-manager.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GlobalsModule,
    FormManagerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
