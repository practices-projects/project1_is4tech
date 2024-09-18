import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogsComponent } from './components/dogs/dogs.component';
import { WhitespaceDirectiveComponent } from './components/whitespace-directive/whitespace-directive.component';

const routes: Routes = [
  {
    path: 'dogs',
    component: DogsComponent
  },
  {
    path: 'whitespace',
    component: WhitespaceDirectiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
