import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamCreDetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  let component: ParamCreDetailsComponent;
  let fixture: ComponentFixture<ParamCreDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParamCreDetailsComponent]
    });
    fixture = TestBed.createComponent(ParamCreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
