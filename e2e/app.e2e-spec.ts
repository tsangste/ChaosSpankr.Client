import { ChaosSpankrPage } from './app.po';

describe('chaos-spankr App', function() {
  let page: ChaosSpankrPage;

  beforeEach(() => {
    page = new ChaosSpankrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
