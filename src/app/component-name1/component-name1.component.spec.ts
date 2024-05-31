import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentName1Component } from './component-name1.component';

describe('ComponentName1Component', () => {
  let component: ComponentName1Component;
  let fixture: ComponentFixture<ComponentName1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentName1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentName1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
