import { Component, OnInit, Input } from '@angular/core';
import { SearchResult } from '../../models/github-responses';
import { CatScoreService } from '../../services/cat-score.service';

@Component({
  selector: 'app-cat-score',
  templateUrl: './cat-score.component.html',
  styleUrls: ['./cat-score.component.css']
})
export class CatScoreComponent implements OnInit {
  @Input()
  project: SearchResult;

  private score: number;

  constructor(private catScoreService: CatScoreService) { }

  ngOnInit() {
    this.score = this.catScoreService.get(this.project);
  }

  increase() {
    this.score = this.catScoreService.increase(this.project);
  }
  decrease() {
    this.score = this.catScoreService.decrease(this.project);
  }
}
