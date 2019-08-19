import { Component, OnInit } from '@angular/core';

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
}
