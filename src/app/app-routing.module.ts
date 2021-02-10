import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './component/orders/orders.component';
import { PizzaMenuComponent } from './component/pizza-menu/pizza-menu.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: 'menu', component: PizzaMenuComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'orders', component: OrdersComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }