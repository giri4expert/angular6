import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input("pProductCount")
  pProductCount = 0

  @Output('produce')
  produce

  constructor() {
    this.produce = new EventEmitter()
   }

  ngOnInit() {
  }

  onButtonclick(){
    this.produce.emit(null)
  }

}
