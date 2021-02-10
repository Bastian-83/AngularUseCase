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
    //this.menuService.getOrders().subscribe(data => {this.orders = data;});
    this.menuService.$itemsChange.subscribe(data => {this.orders = data});
  }
  
}
