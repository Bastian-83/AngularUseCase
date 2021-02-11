import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  orders: any = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.orders = this.cartService.orderList; //bad workaround! -> falsche variante
    this.cartService.itemsChange$.subscribe(data => {this.orders = data});
  }

  ngOnDestroy(){
    //this.menuService.$itemsChange.unsubscribe();
  }
  
  onClick() {
    this.cartService.orderFood();
  }

  getSum(orders): number {
    let totalSum = 0;
    orders.forEach(element => {
      totalSum = totalSum + element.price
    });
    console.log(totalSum);
    return totalSum;
  }

}
