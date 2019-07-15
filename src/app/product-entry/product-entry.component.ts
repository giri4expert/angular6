import { Component, OnInit } from '@angular/core';
import {Product} from './product'

@Component({
  selector: 'app-product-entry',
  templateUrl: './product-entry.component.html',
  styleUrls: ['./product-entry.component.css']
})
export class ProductEntryComponent implements OnInit {

  productArray:Product[] = <any> <Product[]> []

  constructor() { }

  ngOnInit() {
  }

  saveProduct(pid, pname){
    
    let product = new Product(pid, pname)
    console.log(product)
    this.productArray.push(product)
  }

}
