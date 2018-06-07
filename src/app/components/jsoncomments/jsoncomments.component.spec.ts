import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JSONcommentsComponent } from './jsoncomments.component';

describe('JSONcommentsComponent', () => {
  let component: JSONcommentsComponent;
  let fixture: ComponentFixture<JSONcommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JSONcommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JSONcommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
