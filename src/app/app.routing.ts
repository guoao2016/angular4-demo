/**
 * Created by youruncloude on 2017/6/13.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {NzDemoButonComponent} from './nzComponent/nzButton/nz-button.component';
import {PointerEventsComponet} from './otherComponent/pointer-events.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'nz-button',
    component: NzDemoButonComponent
  },
  {
    path: 'pointer-events',
    component: PointerEventsComponet
  },
  {
    path: 'preload-test',
    loadChildren: './preloadModule/preload.module#PreloadModule'
  }
]

@NgModule({
  imports: [
    // RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules, useHash: true})
    // RouterModule.forRoot(routes, {useHash: true})
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
