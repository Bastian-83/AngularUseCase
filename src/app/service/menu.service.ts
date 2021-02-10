import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

export interface Pizza {
  "id": number;
  "title": string;
  "description": string;
  "price": number;
  "complete": boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  itemsChange$ = new Subject<Pizza>();
  orderList: any = [];

  constructor(private http: HttpClient) { }

  getMenu() {
    return this.http.get('http://localhost:3000/pizzas');
  }
}
