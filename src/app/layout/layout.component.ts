import { Component } from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: 'content-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.less']

})

export class ContentLayout {
    constructor(
        private _router: Router
    ) {

    }

    onClickFun = (router) => {
        this._router.navigate([router]);
    }
 }


