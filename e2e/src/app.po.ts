import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getProjects() {
    const projects = element.all(by.css('.project'));
    return projects;
  }

  getFirstProjectTitle() {
    return element(by.css('.project:first-child .project__title')).getText();
  }

  getFirstProjectPlusButton() {
    return element(by.css('.project:first-child .cat-score__btn.increase'));
  }

  getFirstProjectScore() {
    return element(by.css('.project:first-child .cat-score__value')).getText();
  }
}
