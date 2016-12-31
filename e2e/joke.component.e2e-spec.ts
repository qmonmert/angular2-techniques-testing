import { browser, by, element } from 'protractor';

describe(`Page: Joke Page`, () => {

    it(`should have a title of "Chuck Norris Jokes"`, () => {
        browser.get('/');

        let title = element(by.css('h2')).getText();

        expect(title).toEqual('Chuck Norris Jokes');
    });

    it(`should have a new joke on button click`, () => {
        browser.get('/');

        let firstJoke = element(by.css('p')).getText();

        element(by.css('button')).click();

        let secondJoke = element(by.css('p')).getText();

        expect(firstJoke).not.toEqual(secondJoke);
    });

});
