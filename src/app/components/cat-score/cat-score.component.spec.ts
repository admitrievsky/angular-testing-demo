import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatScoreComponent } from './cat-score.component';
import { CatScoreService } from '../../services/cat-score.service';
import { project } from '../../../testing/model-stubs/project-stub';

describe('CatScoreComponent (Class)', () => {
  let component: CatScoreComponent;
  let fixture: ComponentFixture<CatScoreComponent>;
  let catScoreService: jasmine.SpyObj<CatScoreService>;

  beforeEach(async(() => {
    catScoreService = jasmine.createSpyObj('CatScoreService', ['get']);

    TestBed.configureTestingModule({
      declarations: [ CatScoreComponent ],
      providers: [
        { provide: CatScoreService, useValue: catScoreService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatScoreComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('calls cat services with project as parameter', () => {
    catScoreService.get.and.returnValue(10);
    component.project = project;
    fixture.detectChanges();
    expect(catScoreService.get.calls.count()).toBe(1);
    const args = catScoreService.get.calls.mostRecent().args;
    expect(args.length).toBe(1);
    expect(args[0].id).toBe(project.id);
  });
});


describe('CatScoreComponent (DOM)', () => {
  let component: CatScoreComponent;
  let fixture: ComponentFixture<CatScoreComponent>;
  let element: HTMLElement;
  let catScoreService: jasmine.SpyObj<CatScoreService>;

  beforeEach(() => {
    catScoreService = jasmine.createSpyObj(
      'CatScoreService', ['get', 'increase', 'decrease']);

    TestBed.configureTestingModule({
      declarations: [ CatScoreComponent ],
      providers: [
        { provide: CatScoreService, useValue: catScoreService }
      ]
    });
    fixture = TestBed.createComponent(CatScoreComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    component.project = project;
  });

  it('should show 10 cats if score is ten', () => {
    catScoreService.get.and.returnValue(10);
    fixture.detectChanges();
    expect(element.querySelectorAll('.cat-score__ticks').length).toBe(10);
  });

  it('should show 10 number if score is ten', () => {
    catScoreService.get.and.returnValue(10);
    fixture.detectChanges();
    const valueElement = <HTMLDivElement>element.querySelector('.cat-score__value');
    expect(valueElement.textContent).toBe('10');
  });

  it('#plus button should increase score', () => {
    catScoreService.increase.and.returnValue(1);

    fixture.detectChanges();
    (<HTMLButtonElement>element.querySelector('.cat-score__btn.increase')).click();
    expect(catScoreService.increase.calls.count()).toBe(1);
  });

  it('#minus button should increase score', () => {
    catScoreService.decrease.and.returnValue(1);

    fixture.detectChanges();
    (<HTMLButtonElement>element.querySelector('.cat-score__btn.decrease')).click();
    expect(catScoreService.decrease.calls.count()).toBe(1);
  });
});
