import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  inputs: ['pProductCount'],
  outputs: ['produce']
})
export class ChildComponent implements OnInit {

  pProductCount = 0

  produce

  constructor() {
    this.produce = new EventEmitter()
   }

  ngOnInit() {
  }

  onButtonclick(){
    this.produce.emit({count:10})
  }

}
