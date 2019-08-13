import { Component, OnInit } from '@angular/core';
import {Product} from './product'
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-entry',
  templateUrl: './product-entry.component.html',
  styleUrls: ['./product-entry.component.css']
})
export class ProductEntryComponent implements OnInit {

  productArray:Product[] = <any> <Product[]> []

  disabled= true
  blueBoldDisabled = 'blueBoldDisabled'
  done = false
  text = 'Welcome to Expertzlab!'
  myColor = 'red'
  myFont = 'bold'
  obj = {}
  as1 = ''
  _prodService: ProductService
  _productList
  error_messages = []

  constructor(prodService:ProductService) { 
    this._prodService = prodService
  }

  ngOnInit() {
    this._prodService.getProductList()
      .subscribe(
        res => {
          this._productList = res
        },
        err => {
          this.error_messages.push(err)
          this.error_messages.push('server Error: plz retry again')
        },
        () => {
          console.log('stream completed')
        }

      )
        
  }

  saveProduct(pid, pname){
    
    const product = new Product(pid, pname)
    console.log(product)
    this.productArray.push(product)
  }

}
