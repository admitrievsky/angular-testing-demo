import { Component, OnInit } from '@angular/core';
import { GithubConnectorService } from '../../services/github-connector.service';
import { Observable } from 'rxjs';
import { SearchResults } from '../../models/github-responses';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  projects$: Observable<SearchResults>;

  constructor(private githubService: GithubConnectorService) { }

  ngOnInit() {
    this.projects$ = this.githubService.searchRepositories('angular');
  }
}
