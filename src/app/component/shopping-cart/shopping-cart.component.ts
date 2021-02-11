import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { Pizza } from 'src/app/service/menu.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  orders: any = [];

  constructor(private cartService: CartService, private oderService: OrderService) { }

  ngOnInit(): void {
    this.orders = this.cartService.orderList; //bad workaround! -> falsche variante
    this.cartService.itemsChange$.subscribe(data => { this.orders = data });
  }

  onClick(orders) {
    this.oderService.orderFood(orders);
    while (orders.length > 0) {
      orders.pop();
    }
  }

  addOne(item: Pizza) {
    this.orders.push(item);
  }

  removeOne(item: Pizza) {
    for (let i = 0; i < this.orders.length; i++) {
      if (item.pid === this.orders[i].pid) {
        this.orders.splice(i, 1);
      }
    } 
  }

  getSum(orders): number {
    let totalSum = 0;
    orders.forEach(element => {
      totalSum = totalSum + element.price
    });
    return totalSum;
  }

}
