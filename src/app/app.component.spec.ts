import { TestBed, async } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { JokeComponent } from './chucknorris/joke/joke.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { JokeService } from './chucknorris/joke.service';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        JokeComponent,
        PageNotFoundComponent
      ],
      imports: [ 
        HttpModule, 
        AppRoutingModule 
      ],
      providers: [ 
        JokeService, 
        { provide: APP_BASE_HREF, useValue: '/' } 
      ]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
  
});
