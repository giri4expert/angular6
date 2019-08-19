import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  valdnMsg = {
    'login':{
    'required':'Login name is required',
    'minlength':'Login name should be min six characters'
  },
  'password':{
    'required':'Password is required',
    'minlength':'Password should be min 6 characters'
  }
}

formErrors = { login:{required:undefined, minlength:undefined}, 
                password:{required:undefined,minlength:undefined}
             }

  constructor() { }

  ngOnInit() {
  }

  onClickSubmit(ln, ps){
    this.formErrors.login = {required:undefined, minlength:undefined}
    this.formErrors.password = {required:undefined, minlength:undefined}
    if(ln.invalid && (ln.dirty || ln.touched)){
      if(ln.errors.required ){
        this.formErrors.login.required = this.valdnMsg.login.required
      }
      if(ln.errors.minlength ){
        this.formErrors.login.minlength = this.valdnMsg.login.minlength
      }
    }

    if(ps.invalid && (ps.dirty || ps.touched)) {
      if(ps.errors.required){
        this.formErrors.password.required = this.valdnMsg.password.required
      }
      if(ps.errors.minlength){
        this.formErrors.password.minlength = this.valdnMsg.password.minlength
      }
    }
  }

}
