import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dog } from '../models/dog.model';

@Injectable({
  providedIn: 'root'
})

export class DogsService {

  private dogAPIUrl = "https://dog.ceo/api/breeds/image/random";

  constructor(private http: HttpClient) { }

  getDogs(): Observable<Dog> {
    return this.http.get<Dog>(this.dogAPIUrl);
  }
}
