import { TestBed, async, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { Http, HttpModule, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { JokeService } from './joke.service';
import { Observable } from 'rxjs/Observable';


describe('JokeService', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ 
                JokeService,
                MockBackend,
                BaseRequestOptions,
                {
                  provide: Http,
                  useFactory: (backend, options) => new Http(backend, options),
                  deps: [MockBackend, BaseRequestOptions]
                } 
            ],
            imports: [ HttpModule ]
        });
    });


    it('should construct', async(inject([JokeService, MockBackend], (jokeService, mockBackend) => {

        expect(jokeService).toBeDefined();

    })));
        

    it('should return a joke', async(inject([JokeService, MockBackend], (jokeService, mockBackend) => {

        const mockJokeResponse = {
            value: {
                joke: 'This is a joke !'
            }
        };

        expect(jokeService).toBeTruthy();
    
        mockBackend.connections.subscribe(conn => {
            conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify(mockJokeResponse) })));
        });
    
        jokeService.getJoke().subscribe(res => {
            expect(res).toEqual(`This is a joke !`);
        });

    })));

});
