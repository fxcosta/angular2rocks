import { AngularCli2Page } from './app.po';

describe('angular-cli2 App', function() {
  let page: AngularCli2Page;

  beforeEach(() => {
    page = new AngularCli2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
