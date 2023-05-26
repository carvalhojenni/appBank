import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageExtratoComponent } from './page-extrato.component';

describe('PageExtratoComponent', () => {
  let component: PageExtratoComponent;
  let fixture: ComponentFixture<PageExtratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageExtratoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageExtratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
