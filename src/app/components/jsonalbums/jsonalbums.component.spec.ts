import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JSONalbumsComponent } from './jsonalbums.component';

describe('JSONalbumsComponent', () => {
  let component: JSONalbumsComponent;
  let fixture: ComponentFixture<JSONalbumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JSONalbumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JSONalbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
