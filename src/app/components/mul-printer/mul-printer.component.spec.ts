import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MulPrinterComponent } from './mul-printer.component';

describe('MulPrinterComponent', () => {
  let component: MulPrinterComponent;
  let fixture: ComponentFixture<MulPrinterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MulPrinterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MulPrinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
