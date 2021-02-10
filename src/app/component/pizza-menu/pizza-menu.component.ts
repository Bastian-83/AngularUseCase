import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { MenuService } from '../../service/menu.service';
import { Pizza } from '../../service/menu.service';


@Component({
  selector: 'app-pizza-menu',
  templateUrl: './pizza-menu.component.html',
  styleUrls: ['./pizza-menu.component.css']
})
export class PizzaMenuComponent implements OnInit {
  menu: any = [];

  constructor(private menuService: MenuService, private cartService: CartService) { }

  ngOnInit(): void {
    this.menuService.getMenu().subscribe(menu => { this.menu = menu; });
  }

  addToCart(item: Pizza) {
    this.cartService.addToCart(item);
  }

}
