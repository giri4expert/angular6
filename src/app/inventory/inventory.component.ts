import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  prodId: string
  stock: number

  constructor() { }

  ngOnInit() {
  }

  pValue(obj){
    console.log(obj)
  }

  saveForm(product){
    console.log('product:template:',product)
    Object.keys(product.controls).forEach((e)=>{
      console.log('ctrl', product.controls[e])
      product.controls[e].disable()
      
    })
  }
}
