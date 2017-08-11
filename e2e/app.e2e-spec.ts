import { NgPickersPage } from './app.po';

describe('ng-pickers App', () => {
  let page: NgPickersPage;

  beforeEach(() => {
    page = new NgPickersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
