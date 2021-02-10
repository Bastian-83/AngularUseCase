import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/service/menu.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  orders;

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    console.log('Start....');
    this.menuService.getOrders();
    console.log('2nd');
    this.menuService.$itemsChange.subscribe(data => {
      console.log(data);
      this.orders = data
    });
  }

  ngOnDestroy(){
    //this.menuService.$itemsChange.unsubscribe();
  }
  
}
