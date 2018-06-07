import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JSONDetallePhotoComponent } from './jsondetalle-photo.component';

describe('JSONDetallePhotoComponent', () => {
  let component: JSONDetallePhotoComponent;
  let fixture: ComponentFixture<JSONDetallePhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JSONDetallePhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JSONDetallePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
