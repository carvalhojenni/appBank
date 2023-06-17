import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoTransferirComponent } from './contato-transferir.component';

describe('ContatoTransferirComponent', () => {
  let component: ContatoTransferirComponent;
  let fixture: ComponentFixture<ContatoTransferirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatoTransferirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContatoTransferirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
