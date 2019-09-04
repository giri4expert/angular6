import { Component, OnInit, OnChanges, AfterContentInit, SimpleChanges, AfterContentChecked } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {

  productList
  productCount = 20

  constructor(private productService: ProductService, private _router:Router) {

   }

  ngOnInit() {
    // this.productList = this.productService.getProductList().subscribe((data)=>{
      this.productService.getProductList().then(res => {
        this.productList = res
        console.log('in component:', res)
      }).catch(e => {
        console.log('error')
      })  
  }
/*
  ngOnChanges(changes: SimpleChanges): void {
    console.log('1: Ng On Changes')
  }

  ngDoCheck(){
    console.log('2','in ng do check')
  }
  goInventory(){
    this._router.navigate(['/inventory'])
  }

  ngAfterContentInit(){
    console.log('After content Intit')
  }

  ngAfterContentChecked(){
    console.log("ng content checked")
  }
*/
  pageCount(){
    return [1,2,3,4,5]
  }

  onEvent(e){
    console.log('received event from child')
    console.log('event:',e)
  }
}
