import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportServiceComponent } from './support-service.component';

describe('SupportServiceComponent', () => {
  let component: SupportServiceComponent;
  let fixture: ComponentFixture<SupportServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupportServiceComponent]
    });
    fixture = TestBed.createComponent(SupportServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
