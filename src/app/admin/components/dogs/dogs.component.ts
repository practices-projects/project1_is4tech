import { Component } from '@angular/core';
import { Dog } from '../../models/dog.model';
import { DogsService } from '../../services/dogs.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent {
  dogImageUrl: string = '';

  constructor(private dogService: DogsService) {}

  ngOnInit(): void {
    this.getDogImage();
  }

  getDogImage(): void {
    this.dogService.getDogs().subscribe((data: Dog) => {
      this.dogImageUrl = data.message;
    });
  }
}
