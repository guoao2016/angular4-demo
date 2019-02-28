import { NgModule } from "@angular/core";
import {PreloadComponent} from './preload.component'
import {PreloadRoutingModule} from './preload.routing';
import {Test1Component} from './test1.component';
import {Test2Component} from './test2.component';

@NgModule({
    imports: [
        PreloadRoutingModule
    ],
    declarations: [
        PreloadComponent,
        Test1Component,
        Test2Component
    ]
})

export class PreloadModule{}