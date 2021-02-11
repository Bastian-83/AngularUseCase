import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pizza } from '../service/menu.service';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  itemsChange$ = new Subject<any>();
  orderList: any = [];

  constructor() { }

  addToCart(item: Pizza) {
    this.orderList.push(item);
    this.itemsChange$.next(this.orderList);
  }

  orderFood() {
    while (this.orderList.length > 0) {
      this.orderList.pop();
    }
  }

}
