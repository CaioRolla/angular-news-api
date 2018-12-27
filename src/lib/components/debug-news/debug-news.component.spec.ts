import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugNewsComponent } from './debug-news.component';

describe('DebugNewsComponent', () => {
  let component: DebugNewsComponent;
  let fixture: ComponentFixture<DebugNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebugNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebugNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
