import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhiteSpaceDirectiveDirective } from './directives/white-space-directive.directive';

@NgModule({
  declarations: [
    WhiteSpaceDirectiveDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WhiteSpaceDirectiveDirective
  ]
})
export class SharedModule { }
