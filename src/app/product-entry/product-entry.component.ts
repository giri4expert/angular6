import { Component, OnInit } from '@angular/core';
import {Product} from './product'
import { ProductService } from '../product.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-entry',
  templateUrl: './product-entry.component.html',
  styleUrls: ['./product-entry.component.css']
})
export class ProductEntryComponent implements OnInit {

  product: Product
  _prodService: ProductService

  prdForm: FormGroup

  constructor(prodService:ProductService) { 
    this._prodService = prodService
    this.product = new Product()
  }

  ngOnInit() {
      this.prdForm = new FormGroup({
        prdId: new FormControl(),
        prdName: new FormControl(),
        skuId : new FormControl(),
        skuName: new FormControl()
      })
  }

  saveProduct(){
    console.log(this.prdForm.value)
  }

}
