import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelpageComponent } from './panelpage.component';

describe('PanelpageComponent', () => {
  let component: PanelpageComponent;
  let fixture: ComponentFixture<PanelpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
