import { Component } from "@angular/core";

@Component({
    selector: 'pointer-events',
    template: 
    `
     <div [style.pointer-events] = "pointer?'none': 'auto'">
        <button nz-button>测试</button>
     </div>
    `
})

export class PointerEventsComponet{
    pointer = true;
}
