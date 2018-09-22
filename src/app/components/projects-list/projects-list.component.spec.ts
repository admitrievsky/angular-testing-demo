import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ProjectsListComponent } from './projects-list.component';
import { GithubConnectorService } from '../../services/github-connector.service';
import { searchResults } from '../../../testing/model-stubs/project-stub';

@Component({selector: 'app-cat-score', template: ''})
class CatScoreComponentStub {
  @Input() project;
}

describe('ProjectsListComponent', () => {
  let component: ProjectsListComponent;
  let fixture: ComponentFixture<ProjectsListComponent>;
  let githubConnectorService: jasmine.SpyObj<GithubConnectorService>;
  let element: HTMLElement;

  beforeEach(async(() => {
    githubConnectorService = jasmine.createSpyObj(
      'GithubConnectorService', ['searchRepositories']);
    githubConnectorService.searchRepositories.and.returnValue(
      of(searchResults));

    TestBed.configureTestingModule({
      declarations: [
        ProjectsListComponent,
        CatScoreComponentStub
      ],
      providers: [
        { provide: GithubConnectorService, useValue: githubConnectorService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsListComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search projects at start', () => {
    expect(githubConnectorService.searchRepositories.calls.count()).toBe(1);
  });

  it('should search Angular only projects', () => {
    expect(githubConnectorService.searchRepositories.calls
      .mostRecent().args[0]).toBe('angular');
  });

  it('should contain project with name `full name`', () => {
    const div:HTMLDivElement =
      element.querySelector('.project:nth-child(1) .project__title');
    expect(div.textContent).toBe('full name');
  });

  it('should contain project with name `Another full name`', () => {
    const div:HTMLDivElement =
      element.querySelector('.project:nth-child(2) .project__title');
    expect(div.textContent).toBe('Another full name');
  });

  it('creates cat score component for records', () => {
    expect(
      element.querySelector('.project:nth-child(1) app-cat-score')).toBeTruthy();
  });
});
