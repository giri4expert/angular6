import { Component, OnInit } from '@angular/core';
import {Product} from './product'

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
  text = "Welcome to Expertzlab!"
  myColor = 'red'
  myFont = 'bold'
  obj = {}
  as1 = ''

  //myStyle = {'color': this.myColor, 'font-weight': this.myFont}
  constructor() { }

  ngOnInit() {
  }

  saveProduct(pid, pname){
    
    let product = new Product(pid, pname)
    console.log(product)
    this.productArray.push(product)
  }

}
