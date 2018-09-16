import { Injectable } from '@angular/core';
import { Project } from '../models/github-responses';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CatScoreService {
  constructor(private storageService: LocalStorageService) { }

  private getStorageKey(project: Project): string {
    return `CAT_SCORE_SERVICE_${project.id}`;
  }

  get(project: Project): number {
    return +this.storageService.get(this.getStorageKey(project));
  }

  private set(project: Project, newValue: number) {
    this.storageService.set(
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
