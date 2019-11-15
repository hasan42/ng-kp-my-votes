import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SequelEpisodesComponent } from './sequel-episodes.component';

describe('SequelEpisodesComponent', () => {
  let component: SequelEpisodesComponent;
  let fixture: ComponentFixture<SequelEpisodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SequelEpisodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SequelEpisodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
