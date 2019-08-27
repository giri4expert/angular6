import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductEntryComponent } from './product-entry/product-entry.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { BsDropdownModule, BsDropdownMenuDirective } from 'ngx-bootstrap/dropdown';
import { SCalculatorComponent } from './scalculator/scalculator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import { InventoryComponent } from './inventory/inventory.component';
import { ProductDisplayComponent } from './product-display/product-display.component'
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component'
import {NgxPaginationModule} from 'ngx-pagination'

@NgModule({
  declarations: [
    AppComponent,
    ProductEntryComponent,
    SCalculatorComponent,
    InventoryComponent,
    ProductDisplayComponent,
    PageNotFoundComponent,
    LoginComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    CollapseModule.forRoot(), FormsModule, 
    ReactiveFormsModule, NgxPaginationModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
