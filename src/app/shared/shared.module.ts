import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomButtonDirective} from "./directives/custom-button.directive";
import {PrimeNumberPipe} from "./pipes/prime-number.pipe";

@NgModule({
  declarations: [
    CustomButtonDirective,
    PrimeNumberPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CustomButtonDirective,
    PrimeNumberPipe,
  ]
})
export class SharedModule { }
