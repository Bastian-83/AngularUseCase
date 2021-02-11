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
  postId;

  constructor(private http: HttpClient) { }

  orderFood(itemList: Pizza[]) {
    itemList.forEach(element => {
      this.orderList.push(element);
    });
    this.itemsChange$.next(this.orderList);
  }

  completeOrder(item: Pizza) {
    const headers = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
    if (item.complete) {
      this.http.post<Pizza>('http://localhost:3000/orders', item, headers ).subscribe(data => {
      //nothing to do here
    })
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
