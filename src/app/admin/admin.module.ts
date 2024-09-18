import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { DogsComponent } from './components/dogs/dogs.component';
import { WhitespaceDirectiveComponent } from './components/whitespace-directive/whitespace-directive.component';

@NgModule({
  declarations: [DogsComponent, WhitespaceDirectiveComponent],
  imports: [CommonModule, SharedModule, FormsModule, AdminRoutingModule],
  exports: [DogsComponent, WhitespaceDirectiveComponent]
})
export class AdminModule {}
