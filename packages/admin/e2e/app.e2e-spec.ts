import { NgxMonorepoAdminPage } from './app.po';

describe('ngx-monorepo-admin App', () => {
  let page: NgxMonorepoAdminPage;

  beforeEach(() => {
    page = new NgxMonorepoAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
