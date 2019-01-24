import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAShipmentComponent } from './book-a-shipment.component';

describe('BookAShipmentComponent', () => {
  let component: BookAShipmentComponent;
  let fixture: ComponentFixture<BookAShipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookAShipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookAShipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
