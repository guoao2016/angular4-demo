import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {NgZorroAntdModule} from 'ng-zorro-antd';

import { AppComponent } from './app.component';
import {ContentLayout} from './layout/layout.component';
import {NzDemoButonComponent} from './nzComponent/nzButton/nz-button.component';
import {PointerEventsComponet} from './otherComponent/pointer-events.component';

import {AppRoutingModule} from './app.routing';
/** 配置angular i18n */

@NgModule({
  declarations: [
    AppComponent,
    ContentLayout,
    NzDemoButonComponent,
    PointerEventsComponet
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
