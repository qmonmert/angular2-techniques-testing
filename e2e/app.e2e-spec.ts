import { Angular2DecemberPage } from './app.po';

describe('angular2-december App', function() {
  let page: Angular2DecemberPage;

  beforeEach(() => {
    page = new Angular2DecemberPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
