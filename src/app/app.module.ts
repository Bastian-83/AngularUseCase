import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PizzaMenuComponent } from './component/pizza-menu/pizza-menu.component';
import { OrdersComponent } from './component/orders/orders.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaMenuComponent,
    OrdersComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
