import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';


@Component({selector: 'app-projects-list', template: ''})
export class ProjectsListStubComponent {}

describe('AppComponent (component stub)', () => {
  // auto-generated code
  beforeEach(async(() => {
    TestBed.configureTestingModule({  // @NgModule-like configuration
      declarations: [
        AppComponent,
        ProjectsListStubComponent  // declare sub-component stubs
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'testing-demo'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('testing-demo');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Testing demo: 🐱CatHub🐱');
  }));
  // custom test
  it('should show Maxilect logo', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const imageSource = (compiled.querySelector('img') as HTMLImageElement).src;
    expect(imageSource).toContain('Logo_Horizontal_1.svg');
  }));
});


describe('AppComponent (NO_ERRORS_SCHEMA)', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  // ... (another tests)
});


describe('AppComponent (minimal setup, web only)', () => {
  let component: AppComponent;
  let componentElement: HTMLElement;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ProjectsListStubComponent
      ]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    componentElement = fixture.nativeElement;
  });
  it('should create the component', async(() => {
    expect(component).toBeTruthy();
  }));
  it('should render title in a h1 tag', async(() => {
    const h1 = componentElement.querySelector('h1');
    expect(h1.textContent).toContain('Testing demo: 🐱CatHub🐱');
  }));
  it('should show Maxilect logo', async(() => {
    const imageSource = (componentElement.querySelector('img') as HTMLImageElement).src;
    expect(imageSource).toContain('Logo_Horizontal_1.svg');
  }));
  // ... (another tests)
});
