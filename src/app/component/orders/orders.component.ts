import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/service/menu.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orderList = [];

  constructor(private oderService: OrderService) { }

  ngOnInit(): void {
    this.orderList = this.oderService.orderList; //bad workaround! -> falsche variante
    this.oderService.itemsChange$.subscribe(data => { this.orderList = data });
  }

  complete(item: Pizza) {
    item.complete = true;
    console.log(item);
  }
}
