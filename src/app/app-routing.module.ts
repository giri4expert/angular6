import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { InventoryComponent } from './inventory/inventory.component';

const routes: Routes = [
  {'path':'product-display','component': ProductDisplayComponent},
  {'path':'inventory','component': InventoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
