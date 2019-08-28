import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('should support login',()=>{

  let component: LoginComponent
  let fixture: ComponentFixture<LoginComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('login works normally', () => {
    expect(component.checkLogin('admin','admin')).toBeTruthy()
  })

  it('wrong password should return false', ()=> {
    expect(component.checkLogin('admin1','admin')).toBeFalsy()
  })

  it('2 + 2 equals 4', () => {
    expect(2 + 3).toBe(4);
  });

  afterEach(() => {
    component = null;
  });
  

})
