import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraiComponent } from './frai.component';

describe('FraiComponent', () => {
  let component: FraiComponent;
  let fixture: ComponentFixture<FraiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FraiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FraiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
