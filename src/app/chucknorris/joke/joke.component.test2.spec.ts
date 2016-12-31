import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpModule } from '@angular/http';
import { JokeService } from './../joke.service';
import { JokeComponent } from './joke.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


describe('JokeComponent Test2', () => {

    let fixture: ComponentFixture<JokeComponent>;
    let component: JokeComponent;
    let jokeService: any;
    let de: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ JokeComponent ],
            imports: [ HttpModule ],
            providers: [ JokeService ]
        });
        fixture = TestBed.createComponent(JokeComponent);
        component = fixture.componentInstance;
        jokeService = TestBed.get(JokeService);
        de = fixture.debugElement;
    });

    it(`should have a title of 'Chuck Norris Joke' (test2)`, () => {
        expect(component.title).toEqual('Chuck Norris Jokes');
    });

    it(`should set the joke property when component initialized (test2)`, () => {
        spyOn(jokeService, 'getJoke')
            .and.returnValue(Observable.of('FAKE JOKE'));

        fixture.detectChanges();

        expect(component.joke).toEqual('FAKE JOKE');
    });

    it(`should have joke content bound onto the page (test2)`, () => {
        spyOn(jokeService, 'getJoke')
            .and.returnValue(Observable.of('FAKE JOKE'));

        fixture.detectChanges();

        let el = de.query(By.css('p')).nativeElement;

        expect(el.textContent).toEqual('FAKE JOKE');
    });

});
