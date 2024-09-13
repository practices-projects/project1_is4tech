import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { DogsComponent } from '../components/dogs/dogs.component';
import { DogsService } from './dogs.service';

beforeEach(async () => {
  await TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    declarations: [DogsComponent],
    providers: [DogsService]
  }).compileComponents();
});
