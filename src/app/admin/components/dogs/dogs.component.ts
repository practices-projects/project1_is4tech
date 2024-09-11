import { Component } from '@angular/core';
import { DogsService } from '../../services/dogs.service';
import { Dog } from '../../models/dog.model'

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent {
  dogImageUrl: string = '';
  inputText: string = '';
  noSpacesText: string = '';

  constructor(private dogService: DogsService) { }

  ngOnInit(): void {
    this.getDogImage();
  }

  getDogImage(): void {
    this.dogService.getDogs().subscribe((data: Dog) => {
      this.dogImageUrl = data.message;
    });
  }

  submitText(): void {
    this.noSpacesText = this.inputText;
  }
}
