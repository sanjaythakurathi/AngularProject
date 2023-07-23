import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiPostDataComponent } from './api-post-data.component';

describe('ApiPostDataComponent', () => {
  let component: ApiPostDataComponent;
  let fixture: ComponentFixture<ApiPostDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiPostDataComponent]
    });
    fixture = TestBed.createComponent(ApiPostDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
