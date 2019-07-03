/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs'

import { UserDetailsComponent } from './user-details.component';

class RouterStub{
  navigate(params){

  }

}

class ActivatedRouteStub{
  private subject = new Subject();
  push(value){
    this.subject.next(value);
  }
  get params(){
    return this.subject.asObservable();
  }

  //params:Observable<any> = Observable.empty();
}

xdescribe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ],
      providers:[
        { provider : Router, useClass: RouterStub },
        { provider : ActivatedRoute, useClass: ActivatedRouteStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should redirect the user to the users page after save', () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router,'navigate');

    component.save();

    expect(spy).toHaveBeenCalledWith(['users']);
  });

  it('should navigate to user to the not found page when an invalid user id is passed ', () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router,'navigate');

    let route:ActivatedRouteStub = TestBed.get(ActivatedRouteStub);
    route.push({id:0});
    //route.params.

    
    expect(spy).toHaveBeenCalledWith(['not-found']);
  });
});
