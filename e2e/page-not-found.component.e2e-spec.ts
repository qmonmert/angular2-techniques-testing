import { browser, by, element } from 'protractor';

describe(`Page: Page Not Found`, () => {

    it(`should call the page not found`, () => {
        browser.get('/badurl');

        let pageNotFoundText = element(by.className('error-page-not-found')).getText();

        expect(pageNotFoundText).toEqual('Page Not Found');
    });

});
