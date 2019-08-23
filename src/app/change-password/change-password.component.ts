import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
      login:['', [Validators.required, Validators.minLength(6)]],
      password:['',this.passwordValidation]
    })
  }

  passwordValidation(fcontrol){
    if(fcontrol.value.length < 5){
      console.log('password length satisfied')
      return {passwd:false}
    }
    console.log('password length NOT satisfied')
  }

}
