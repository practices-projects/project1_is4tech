import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project1_is4tech';

  constructor(private router: Router) {

  }

  NavigateToDogs() {
    this.router.navigate(['/dogs']);
  }
}
