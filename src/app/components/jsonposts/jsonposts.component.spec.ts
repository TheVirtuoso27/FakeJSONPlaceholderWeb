import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JSONpostsComponent } from './jsonposts.component';

describe('JSONpostsComponent', () => {
  let component: JSONpostsComponent;
  let fixture: ComponentFixture<JSONpostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JSONpostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JSONpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
