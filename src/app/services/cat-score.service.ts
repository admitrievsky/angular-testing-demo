import { Injectable } from '@angular/core';
import { SearchResult } from '../models/github-responses';

@Injectable({
  providedIn: 'root'
})
export class CatScoreService {
  constructor() { }

  private getStorageKey(project: SearchResult): string {
    return `CAT_SCORE_SERVICE_${project.id}`;
  }

  get(project: SearchResult): number {
    return +localStorage.getItem(this.getStorageKey(project));
  }

  private set(project: SearchResult, newValue: number) {
    localStorage.setItem(
      this.getStorageKey(project),
      newValue.toString()
    );
  }

  increase(project: SearchResult): number {
    const newValue = this.get(project) + 1;
    this.set(project, newValue);
    return newValue;
  }

  decrease(project: SearchResult): number {
    const newValue = Math.max(this.get(project) - 1, 0);
    this.set(project, newValue);
    return newValue;
  }
}
