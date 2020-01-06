import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';

const COMPONENTS = [
  CommonModule,
  FormsModule,
  NgZorroAntdModule,
];


@NgModule({
  declarations: [],
  imports: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ],
  providers: [],

})
export class SharedModule { }