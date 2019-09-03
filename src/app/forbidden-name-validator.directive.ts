import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appForbiddenNameValidator]',
  providers:[{provide:NG_VALIDATORS, 
    useExisting: ForbiddenNameValidatorDirective,
              multi:true}]
})
export class ForbiddenNameValidatorDirective {

  @Input('appForbiddenNameValidator')
  forbiddenName : string

  constructor() { }

  validate(control: AbstractControl): {[key: string]: any} | null{
    console.log("Validate Called:",this.forbiddenName)
   return this.forbiddenName ? 
      forbiddenNameValidator(new RegExp(this.forbiddenName,"i"))(control) :null;
  }

}

export function forbiddenNameValidator(reg: RegExp): ValidatorFn{
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = reg.test (control.value)
    console.log('forbidden-sta:', forbidden)
    return forbidden ? {'forbiddenName': {value:control.value}} : null;
  }
}
