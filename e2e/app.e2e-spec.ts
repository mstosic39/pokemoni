import { PokemoniPage } from './app.po';

describe('pokemoni App', () => {
  let page: PokemoniPage;

  beforeEach(() => {
    page = new PokemoniPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
