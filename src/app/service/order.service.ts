import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Pizza } from './menu.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  itemsChange$ = new Subject<any>();
  orderList: any = [];

  constructor() { }

  orderFood(itemList: Pizza[]) {
    console.log('itemList:'+itemList);

    itemList.forEach(element => {
      this.orderList.push(element);
    });
    this.itemsChange$.next(this.orderList);
    console.log('Wurde dem Warenkorb hinzugefügt: ' + JSON.stringify(itemList));
  }

    // getOrders() {
  //   return this.http.get('http://localhost:3000/orders')
  //     .pipe(map(data => {
  //       this.orderList = data;
  //       this.itemsChange$.next(this.orderList);
  //     }));
  // }

  
}
