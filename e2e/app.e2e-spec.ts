import { Angular2AnimationsPage } from './app.po';

describe('angular2-animations App', () => {
  let page: Angular2AnimationsPage;

  beforeEach(() => {
    page = new Angular2AnimationsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
