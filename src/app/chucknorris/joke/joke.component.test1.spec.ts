import { JokeService } from './../joke.service';
import { JokeComponent } from './joke.component';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/Rx';
import 'rxjs/add/observable/of';


describe('JokeComponent Test1', () => {

  let component: JokeComponent;
  let jokeService: any;

  beforeEach(() => {
    jokeService = {
      getJoke: () => Observable.of('FAKE JOKE')
    };
    component = new JokeComponent(jokeService);
  });

  it(`should add 1 + 1`, () => {
    expect(1 + 1).toEqual(2);
  });

  it(`should have a title of 'Chuck Norris Joke'`, () => {
    expect(component.title).toEqual('Chuck Norris Jokes');
  });

  it(`should set the joke property when component initialized`, () => {
    component.ngOnInit();
    expect(component.joke).toEqual('FAKE JOKE');
  });

});
