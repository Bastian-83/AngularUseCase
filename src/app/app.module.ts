import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PizzaMenuComponent } from './component/pizza-menu/pizza-menu.component';
import { OrdersComponent } from './component/orders/orders.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PizzaMenuComponent,
    OrdersComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
