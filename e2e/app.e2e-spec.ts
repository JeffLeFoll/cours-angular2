import { BibliothequePage } from './app.po';

describe('bibliotheque App', function() {
  let page: BibliothequePage;

  beforeEach(() => {
    page = new BibliothequePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
