import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservarDialogComponent } from './reservar-dialog.component';

describe('ReservarDialogComponent', () => {
  let component: ReservarDialogComponent;
  let fixture: ComponentFixture<ReservarDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservarDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservarDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
