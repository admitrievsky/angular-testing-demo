import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatScoreComponent } from './cat-score.component';

describe('CatScoreComponent', () => {
  let component: CatScoreComponent;
  let fixture: ComponentFixture<CatScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
