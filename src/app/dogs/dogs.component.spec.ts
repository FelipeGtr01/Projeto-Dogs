import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DOGSComponent } from './dogs.component';

describe('DOGSComponent', () => {
  let component: DOGSComponent;
  let fixture: ComponentFixture<DOGSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DOGSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DOGSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
