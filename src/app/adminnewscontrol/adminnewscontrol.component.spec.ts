import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminnewscontrolComponent } from './adminnewscontrol.component';

describe('AdminnewscontrolComponent', () => {
  let component: AdminnewscontrolComponent;
  let fixture: ComponentFixture<AdminnewscontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminnewscontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminnewscontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
