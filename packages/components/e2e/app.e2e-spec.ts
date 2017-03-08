import { NgxMonorepoComponentsPage } from './app.po';

describe('ngx-monorepo-components App', () => {
  let page: NgxMonorepoComponentsPage;

  beforeEach(() => {
    page = new NgxMonorepoComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
