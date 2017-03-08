import { NgxMonorepoUiPage } from './app.po';

describe('ngx-monorepo-ui App', () => {
  let page: NgxMonorepoUiPage;

  beforeEach(() => {
    page = new NgxMonorepoUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
