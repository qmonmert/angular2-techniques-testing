import { Angular2TechniquesTesting } from './app.po';

describe('angular2-techniques-testing App', function() {
  let page: Angular2TechniquesTesting;

  beforeEach(() => {
    page = new Angular2TechniquesTesting();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
