import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Pizza } from './menu.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  itemsChange$ = new Subject<any>();
  orderList: any = [];

  constructor(private http: HttpClient) { }

  orderFood(itemList: Pizza[]) {
    console.log('itemList:' + itemList);

    itemList.forEach(element => {
      this.orderList.push(element);
    });
    this.itemsChange$.next(this.orderList);
    console.log('Wurde dem Warenkorb hinzugefügt: ' + JSON.stringify(itemList));
  }

  completeOrder(item: Pizza) {
    const headers = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
    if (item.complete) {
      console.log('Item to Store in DB (in json): ' + JSON.stringify(item));
      this.http.post('http://localhost:3000/orders/', JSON.stringify(item), headers );
    } else {
      console.log('cant complete this order');
    }
  }

  // getOrders() {
  //   return this.http.get('http://localhost:3000/orders')
  //     .pipe(map(data => {
  //       this.orderList = data;
  //       this.itemsChange$.next(this.orderList);
  //     }));
  // }


}
