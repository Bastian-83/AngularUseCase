import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../service/menu.service';

@Component({
  selector: 'app-pizza-menu',
  templateUrl: './pizza-menu.component.html',
  styleUrls: ['./pizza-menu.component.css']
})
export class PizzaMenuComponent implements OnInit {
  menu: any = [];
  orders: any = [];

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.getMenu().subscribe(menu => { this.menu = menu; });
    // this.menuService.getOrders().subscribe(data => { this.orders = data; });
    // this.menuService.$itemsChange.subscribe(data => { this.orders = data });
  }

  ngOnDestroy(){
    this.menuService.$itemsChange.unsubscribe();
  }

  onClick(item) {
    this.menuService.addItem(item);
  }

}
