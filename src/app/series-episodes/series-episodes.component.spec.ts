import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesEpisodesComponent } from './series-episodes.component';

describe('SeriesEpisodesComponent', () => {
  let component: SeriesEpisodesComponent;
  let fixture: ComponentFixture<SeriesEpisodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesEpisodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesEpisodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
