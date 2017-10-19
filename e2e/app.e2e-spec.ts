import { Ang4GithubSamplePage } from './app.po';

describe('ang4-github-sample App', () => {
  let page: Ang4GithubSamplePage;

  beforeEach(() => {
    page = new Ang4GithubSamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
