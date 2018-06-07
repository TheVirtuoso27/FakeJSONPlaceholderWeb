import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JSONtodosComponent } from './jsontodos.component';

describe('JSONtodosComponent', () => {
  let component: JSONtodosComponent;
  let fixture: ComponentFixture<JSONtodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JSONtodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JSONtodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
