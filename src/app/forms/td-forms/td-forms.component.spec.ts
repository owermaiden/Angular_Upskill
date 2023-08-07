import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdFormsComponent } from './td-forms.component';

describe('TdFormsComponent', () => {
  let component: TdFormsComponent;
  let fixture: ComponentFixture<TdFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TdFormsComponent]
    });
    fixture = TestBed.createComponent(TdFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
