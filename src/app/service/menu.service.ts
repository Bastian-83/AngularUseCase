import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  $itemsChange = new Subject<any>();
  orderList: any = [];

  constructor(private http: HttpClient) { }

  getMenu() {
    return this.http.get('http://localhost:3000/pizzas');
  }

  getOrders() {
    return this.http.get('http://localhost:3000/orders')
    .pipe(map(data => {
      this.orderList = data;
      this.$itemsChange.next(this.orderList);
    }));
  }

  addItem(item) {
    this.orderList.push(item);
    this.$itemsChange.next(this.orderList);
  }

}
