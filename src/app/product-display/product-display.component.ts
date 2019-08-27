import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {

  productList

  constructor(private productService: ProductService, private _router:Router) {

   }

  ngOnInit() {
    this.productList = this.productService.getProductList().subscribe((data)=>{
      this.productList = data
    })
  }

  goInventory(){
    this._router.navigate(['/inventory'])
  }
}
