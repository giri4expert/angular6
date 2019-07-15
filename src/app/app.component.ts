import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  monthsArray = ['Jan', 'Feb', 'Mar', 'Apr' ]

  title = 'Expertzlab Technologies Pvt. Ltd.';

  changeMonth(e){
    console.log(e.target.value)
  }
}
