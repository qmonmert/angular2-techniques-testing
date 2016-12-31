import { Angular2TechniquesTesting } from './app.po';
import { browser, by, element } from 'protractor';

describe('angular2-techniques-testing App', function() {
  let page: Angular2TechniquesTesting;

  beforeEach(() => {
    page = new Angular2TechniquesTesting();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });

  it(`should navigate correctly`, () => {
      browser.get('/');

      let firstJoke = element(by.css('p')).getText();
      expect(firstJoke).not.toEqual('');

      element(by.className('nav-page-not-found')).click();

      let pageNotFoundText = element(by.className('error-page-not-found')).getText();
      expect(pageNotFoundText).toEqual('Page Not Found');

      element(by.className('nav-jokes')).click();

      let secondJoke = element(by.css('p')).getText();
      expect(secondJoke).not.toEqual('');
  });

});
