import { ScrumPokerPage } from './app.po';

describe('scrum-poker App', function() {
  let page: ScrumPokerPage;

  beforeEach(() => {
    page = new ScrumPokerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
