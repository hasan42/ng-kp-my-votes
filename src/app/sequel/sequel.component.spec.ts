import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SequelComponent } from './sequel.component';

describe('SequelComponent', () => {
  let component: SequelComponent;
  let fixture: ComponentFixture<SequelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SequelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SequelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
