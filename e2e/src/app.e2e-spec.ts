import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Testing demo: 🐱CatHub🐱');
  });

  it('should fetch projects from github', () => {
    page.navigateTo();
    expect(page.getProjects().count()).toEqual(30);
  });

  it('should fetch first project as angular', () => {
    page.navigateTo();
    expect(page.getFirstProjectTitle()).toEqual('angular/angular');
  });

  it('should increase score by one', () => {
    page.navigateTo();
    page.getFirstProjectPlusButton().click().then(() => {
      expect(page.getFirstProjectScore()).toEqual("1");
    });
  });
});
