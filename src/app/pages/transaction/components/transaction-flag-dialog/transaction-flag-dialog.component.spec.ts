import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionFlagDialogComponent } from './transaction-flag-dialog.component';

describe('TransactionFlagDialogComponent', () => {
  let component: TransactionFlagDialogComponent;
  let fixture: ComponentFixture<TransactionFlagDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionFlagDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionFlagDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
