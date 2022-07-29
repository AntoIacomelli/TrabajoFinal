import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyhComponent } from './syh.component';

describe('SyhComponent', () => {
  let component: SyhComponent;
  let fixture: ComponentFixture<SyhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
