import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JSONusersComponent } from './jsonusers.component';

describe('JSONusersComponent', () => {
  let component: JSONusersComponent;
  let fixture: ComponentFixture<JSONusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JSONusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JSONusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
