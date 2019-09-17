import { Component, OnInit } from '@angular/core';
import {environment} from '../environments/environment'
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router, RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

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
      .happy{
         width:100px;
         height:100px;
         border:solid 1px red;
      }
   `],
   animations: [
      trigger('myanimation',[
         state('lower',style({
            transform : 'translateY(100px)'
         })),
         state('upper',style({
            transform : 'translateY(0px)'
         })),
         transition('lower <=> upper',animate('3000ms ease-in'))
      ])
   ]
})
export class AppComponent implements OnInit {

  monthsArray = ['Jan', 'Feb', 'Mar', 'Apr' ]

  title = 'Expertzlab Technologies Pvt. Ltd.';

  appTitle = environment.appTitle;
 
  productentrymenu = 'Product Entry';
  loading = false
  isCollapsed = true;
  state = 'lower';
  cPrice = .3
  nDate = new Date();

  constructor(private router: Router) {
   router.events.subscribe((event: RouterEvent) => {
     this.navigationInterceptor(event)
   })
 }

  ngOnInit(){
     setInterval(()=>{
      this.nDate = new Date()
     },1000)
  }

  changeMonth(e){
    console.log(e.target.value)
  }

  animate() {
   this.state = this.state === 'upper' ? 'lower' : 'upper';
 }

 navigationInterceptor(event: RouterEvent): void {
   if (event instanceof NavigationStart) {
     this.loading = true
   }
   if (event instanceof NavigationEnd) {
     this.loading = true
   }

   // Set loading state to false in both of the below events to hide the spinner in case a request fails
   if (event instanceof NavigationCancel) {
     this.loading = false
   }
   if (event instanceof NavigationError) {
     this.loading = false
   }
}

}
