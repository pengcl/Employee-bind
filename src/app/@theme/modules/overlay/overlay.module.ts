import {NgModule, ModuleWithProviders} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {OverlayComponent} from './overlay.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [OverlayComponent],
  exports: [OverlayComponent],
  entryComponents: [OverlayComponent],
  providers: []
})
export class OverlayModule {
  public static forRoot(): ModuleWithProviders {
    return {ngModule: OverlayModule, providers: []};
  }
}
