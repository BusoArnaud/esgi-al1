import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomButtonDirective} from "./directives/custom-button.directive";
import {PrimeNumberPipe} from "./pipes/prime-number.pipe";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    CustomButtonDirective,
    PrimeNumberPipe,
  ],
  imports: [
    CommonModule,
    TranslateModule,
  ],
  exports: [
    CustomButtonDirective,
    PrimeNumberPipe,
  ]
})
export class SharedModule { }
