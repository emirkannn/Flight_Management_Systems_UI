import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRouteComponent } from './update-route.component';

describe('UpdateRouteComponent', () => {
  let component: UpdateRouteComponent;
  let fixture: ComponentFixture<UpdateRouteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateRouteComponent]
    });
    fixture = TestBed.createComponent(UpdateRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
