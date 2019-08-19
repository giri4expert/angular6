import { Component, OnInit } from '@angular/core';
import {Product} from './product'
import { ProductService } from '../product.service';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

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
  }

  ngOnInit() {
      this.prdForm = new FormGroup({
        prdId : new FormControl('',Validators.compose([Validators.required, Validators.minLength(5)])),
        prdName: new FormControl(),
        skills: new FormGroup({
        skuId : new FormControl(),
        skuName: new FormControl()
        })
      })
      /*
      this.prdForm.patchValue({
        prdId: '12',
        prdName: 'Book Omega',
        skuId: '001',
        skuName : 'Register 11'
      })
      */
  }

  saveProduct(){
    console.log('valid:'+this.prdForm.valid)
    this.product = new Product(this.prdForm.value)
    console.log(this.product)
    console.log('prdForm:', this.prdForm)
  }

  logKeyValues(){
    this.loopCtrls(this.prdForm)
  }

  loopCtrls(grp: FormGroup){
    Object.keys(grp.controls).forEach((x) => {
      const actrl  = grp.get(x)
      if(actrl instanceof FormControl){
        console.log('key:',x,' value:', actrl.value)
      } else {
        this.loopCtrls(<FormGroup>actrl)
      }
      
    })
  }
}
