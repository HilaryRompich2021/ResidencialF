import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrScannersalComponent } from './qr-scannersal.component';

describe('QrScannersalComponent', () => {
  let component: QrScannersalComponent;
  let fixture: ComponentFixture<QrScannersalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QrScannersalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrScannersalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
