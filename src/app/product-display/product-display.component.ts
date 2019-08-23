import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {


  constructor(private _router:Router) {

   }

  ngOnInit() {
  }

  goInventory(){
    this._router.navigate(['/inventory'])
  }
}