import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientComponent} from "./components/client/client.component";
import {ProductsComponent} from "./components/products/products.component";

const routes: Routes = [
  { path: "clients", component:ClientComponent },
  { path: "products", component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
