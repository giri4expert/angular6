import { Component, OnInit } from '@angular/core';
import {environment} from '../environments/environment'
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles:[`
      div{
         margin: 0 auto;
         text-align: center;
         width:200px;
      }
      .rotate{
         width:100px;
         height:100px;
         border:solid 1px red;
      }
   `],
   animations: [
      trigger('myanimation',[
         state('smaller',style({
            transform : 'translateY(100px)'
         })),
         state('larger',style({
            transform : 'translateY(0px)'
         })),
         transition('smaller <=> larger',animate('300ms ease-in'))
      ])
   ]
})
export class AppComponent implements OnInit {

  monthsArray = ['Jan', 'Feb', 'Mar', 'Apr' ]

  title = 'Expertzlab Technologies Pvt. Ltd.';

  appTitle = environment.appTitle;

  productentrymenu = 'Product Entry';
  
  isCollapsed = true;

  cPrice = .3
  nDate = new Date();

  ngOnInit(){
     setInterval(()=>{
      this.nDate = new Date()
     },1000)
  }

  changeMonth(e){
    console.log(e.target.value)
  }
}
