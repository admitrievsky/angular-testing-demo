import { Injectable } from '@angular/core';
import { Project } from '../models/github-responses';

@Injectable({
  providedIn: 'root'
})
export class CatScoreService {
  constructor() { }

  private getStorageKey(project: Project): string {
    return `CAT_SCORE_SERVICE_${project.id}`;
  }

  get(project: Project): number {
    return +localStorage.getItem(this.getStorageKey(project));
  }

  private set(project: Project, newValue: number) {
    localStorage.setItem(
      this.getStorageKey(project),
      newValue.toString()
    );
  }

  increase(project: Project): number {
    const newValue = this.get(project) + 1;
    this.set(project, newValue);
    return newValue;
  }

  decrease(project: Project): number {
    const newValue = Math.max(this.get(project) - 1, 0);
    this.set(project, newValue);
    return newValue;
  }
}
