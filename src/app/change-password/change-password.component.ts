import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  login:FormGroup
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.login = this.fb.group({
      lmethod:['login'],
      login:['', ],
      email:['', []],
      password:['',this.passwordValidation]
    })

    this.login.valueChanges.subscribe((val) => {
      console.log('event detected:'+val.lmethod)
      if(val.lmethod === 'email' || val.lmethod === 'login'){
        if(val.lmethod === 'email'){
          const emctrl = this.login.get('email')
          emctrl.setValidators([Validators.required,Validators.email])
          const lgnCtrl = this.login.get('login')
          lgnCtrl.setValidators([]);
        } else {
          const emctrl = this.login.get('email')
          emctrl.setValidators([])
          const lgnCtrl = this.login.get('login')
          lgnCtrl.setValidators([Validators.required]);
        }
      
    } 
    })
  }

  passwordValidation(fcontrol){
    if(fcontrol.value.length < 5){
      console.log('password length satisfied')
      return {passwd:false}
    }
    console.log('password length NOT satisfied')
  }

  setLgnMethodCtrl(value){
    this.login.updateValueAndValidity()
  }


}
