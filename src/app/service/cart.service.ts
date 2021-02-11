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
    console.log('Wurde dem Warenkorb hinzugefügt: ' + JSON.stringify(item));
  }

  orderFood() {
    console.log('Bestellung wurde abgeschickt: ' + JSON.stringify(this.orderList));
    while (this.orderList.length > 0) {
      this.orderList.pop();
    }
    console.log('Warenkorb wurde geleert: ' + JSON.stringify(this.orderList));
  }

}
