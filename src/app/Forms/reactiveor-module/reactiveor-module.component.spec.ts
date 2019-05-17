import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveorModuleComponent } from './reactiveor-module.component';

describe('ReactiveorModuleComponent', () => {
  let component: ReactiveorModuleComponent;
  let fixture: ComponentFixture<ReactiveorModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveorModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveorModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
