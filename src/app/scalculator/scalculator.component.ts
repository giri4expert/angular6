import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scalculator',
  templateUrl: './scalculator.component.html',
  styleUrls: ['./scalculator.component.css']
})
export class SCalculatorComponent implements OnInit {

  value1:number 
  value2:number 
  operator =''
  result = 0

  constructor() { 
    //this.value1 = 50
    //this.value2 = 30
  }

  ngOnInit() {
    //this.result = parseInt( this.value1) + this.value2
  }

  calculateResult(){
    if(this.operator == '+'){
      //this.result = parseInt(this.value1) + parseInt(this.value2)
    }
  }

  setOperator(op){
    console.log('operator='+op)
    this.operator = op
  }

}
