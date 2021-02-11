import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Pizza {
  "pid": number;
  "title": string;
  "description": string;
  "price": number;
  "complete": boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getMenu() {
    return this.http.get('http://localhost:3000/pizzas');
  }
}
