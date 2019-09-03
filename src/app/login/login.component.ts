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
    'minlength':'Login name should be min six characters',
    'forbidden':'This login name is not allowed'
  },
  'password':{
    'required':'Password is required',
    'minlength':'Password should be min 6 characters'
  }
}

formErrors = { login:{required:undefined, minlength:undefined,
              forbidden:undefined
              }, 
                password:{required:undefined,minlength:undefined},
             }

  constructor() { }

  ngOnInit() {
  }

  onClickSubmit(ln, ps){

    console.log("Login")
    this.formErrors.login = {required:undefined, minlength:undefined, forbidden:undefined}
    this.formErrors.password = {required:undefined, minlength:undefined}
    if(ln.invalid && (ln.dirty || ln.touched)){
      if(ln.errors.required ){
        this.formErrors.login.required = this.valdnMsg.login.required
      }
      if(ln.errors.minlength ){
        this.formErrors.login.minlength = this.valdnMsg.login.minlength
      }
      if(ln.errors.forbiddenName){
        this.formErrors.login.forbidden = this.valdnMsg.login.forbidden
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

  checkLogin(userName, password){
    const uname = 'admin'
    const passpwd = 'admin'
    if(userName === uname && password === passpwd){
      return true;
    } else { return false;}
   
  }

}
