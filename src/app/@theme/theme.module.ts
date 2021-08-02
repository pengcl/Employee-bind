import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {SwiperModule} from 'ngx-swiper-wrapper';


const THIRD_PART = [MatButtonModule, MatIconModule, SwiperModule, NgxQRCodeModule];

import {WxModule} from './modules/wx';
import {FabModule} from './modules/fab/fab.module';
import {OverlayModule} from './modules/overlay';
import {MenuModule} from './modules/menu/menu.module';
import {FooterModule} from './modules/footer/footer.module';
import {ContentModule} from './modules/content/content.module';
import {FooterBtnModule} from './modules/footer-btn/footer-btn.module';
import {SInfiniteLoaderModule} from './modules/infiniteloader';

import {COMPONENTS, DIRECTIVES, PIPES} from './index';

import {SearchModule} from './modules/search-bar/search.module';
// @ts-ignore
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
// @ts-ignore
import {NgxQRCodeModule} from 'ngx-qrcode2';
import {WeUiModule} from 'ngx-weui';
import {PickerModule} from '../@core/modules/picker';
import {UploaderModule} from './modules/uploader';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    WeUiModule,
    THIRD_PART,
    FabModule,
    UploaderModule,
    MatFormFieldModule,
    MatInputModule,
    WxModule.forRoot(),
    SInfiniteLoaderModule.forRoot(),
    MenuModule.forRoot(),
    FooterModule.forRoot(),
    PickerModule,
    ContentModule.forRoot(),
    OverlayModule.forRoot(),
    FooterBtnModule.forRoot(),
    SearchModule.forRoot()
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    SInfiniteLoaderModule,
    THIRD_PART,
    FabModule,
    WeUiModule,
    PickerModule,
    UploaderModule,
    MatFormFieldModule,
    MatInputModule,
    WxModule,
    MenuModule,
    FooterModule,
    ContentModule,
    OverlayModule,
    FooterBtnModule,
    SearchModule,
    ...DIRECTIVES,
    ...COMPONENTS,
    ...PIPES
  ],
  declarations: [...DIRECTIVES, ...COMPONENTS, ...PIPES],
  entryComponents: [COMPONENTS]
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ThemeModule,
      providers: []
    } as ModuleWithProviders;
  }
}
