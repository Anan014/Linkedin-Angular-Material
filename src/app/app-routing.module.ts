import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'customers',
    loadChildren: () =>
      import('./customers/customers.module').then(
        (module) => module.CustomersModule
      ),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/orders.module').then((module) => module.OrdersModule),
  },
  {
    path: 'messages',
    loadChildren: () =>
      import('./messages/messages.module').then(
        (module) => module.MessagesModule
      ),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
