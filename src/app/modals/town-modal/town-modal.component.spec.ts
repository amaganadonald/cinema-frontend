import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TownModalComponent } from './town-modal.component';

describe('TownModalComponent', () => {
  let component: TownModalComponent;
  let fixture: ComponentFixture<TownModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TownModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TownModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
