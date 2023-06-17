import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferRealizadaComponent } from './transfer-realizada.component';

describe('TransferRealizadaComponent', () => {
  let component: TransferRealizadaComponent;
  let fixture: ComponentFixture<TransferRealizadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferRealizadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferRealizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
