import { Component } from "@angular/core";


@Component({
    selector: 'preload-component',
    template: 
    `
        <div style="color:red;">
            <router-outlet></router-outlet>
        </div>
    `
})

export class PreloadComponent {}