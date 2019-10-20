import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})

export class ImagesService {

  constructor(private http: HttpClient) { }

  getPresentations() {
    return this.http.get('./assets/presentation.json');
  }

}
