import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { DogsComponent } from './components/dogs/dogs.component';

@NgModule({
  declarations: [DogsComponent],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [DogsComponent]
})
export class AdminModule {}
