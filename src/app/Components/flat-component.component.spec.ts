import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatComponentComponent } from './flat-component.component';

describe('FlatComponentComponent', () => {
  let component: FlatComponentComponent;
  let fixture: ComponentFixture<FlatComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlatComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlatComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
