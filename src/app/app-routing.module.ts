import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { InventoryComponent } from './inventory/inventory.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductEntryComponent } from './product-entry/product-entry.component';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [
  {'path':'product-entry', 'component': ProductEntryComponent},
  {'path':'','component': ProductDisplayComponent},
  {'path':'product-display','component': ProductDisplayComponent},
  {'path':'inventory','component': InventoryComponent},
  {path:'login',component: LoginComponent},
  {'path':'changepass', 'component': ChangePasswordComponent},
  {'path':'**','component':PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
