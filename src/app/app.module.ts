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
import {FormsModule, ReactiveFormsModule, NG_VALIDATORS} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component'
import {NgxPaginationModule} from 'ngx-pagination';
import { CounterDirective } from './counter.directive';
import { ChangeTextDirective } from './change-text.directive';
import { ForbiddenNameValidatorDirective } from './forbidden-name-validator.directive';
import { MultiplierPipe } from './multiplier.pipe';
import { ChildComponent } from './child/child.component';
import { FileUploadComponent } from './file-upload/file-upload.component'
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'

@NgModule({
  declarations: [
    AppComponent,
    ProductEntryComponent,
    SCalculatorComponent,
    InventoryComponent,
    ProductDisplayComponent,
    PageNotFoundComponent,
    LoginComponent,
    ChangePasswordComponent,
    CounterDirective,
    ChangeTextDirective,ForbiddenNameValidatorDirective, MultiplierPipe, ChildComponent, FileUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    CollapseModule.forRoot(), FormsModule, 
    ReactiveFormsModule, NgxPaginationModule,
    MatButtonModule, MatCheckboxModule, MatMenuModule,  MatSidenavModule,
    MatToolbarModule, MatFormFieldModule, MatInputModule
    
  ],
  providers:[ForbiddenNameValidatorDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
