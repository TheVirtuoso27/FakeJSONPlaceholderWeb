import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JSONphotosComponent } from './jsonphotos.component';

describe('JSONphotosComponent', () => {
  let component: JSONphotosComponent;
  let fixture: ComponentFixture<JSONphotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JSONphotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JSONphotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
