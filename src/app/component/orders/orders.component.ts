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
  selectedItemFromList: Pizza;

  constructor(private oderService: OrderService) { }

  ngOnInit(): void {
    this.orderList = this.oderService.orderList; //bad workaround! -> falsche variante
    this.oderService.itemsChange$.subscribe(data => { this.orderList = data });
  }

  complete(item: Pizza) {
    item.complete = true;
    this.oderService.completeOrder(item);

    for (let i = 0; i < this.orderList.length; i++) {
      if (item.pid === this.orderList[i].pid) {
        this.orderList.splice(i, 1);
      }
    }
  }

  selectItemFromList(item: Pizza) {
    this.selectedItemFromList = item;
  }
}
