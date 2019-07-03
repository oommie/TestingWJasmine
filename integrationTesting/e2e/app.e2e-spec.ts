import { IntegrationTestingPage } from './app.po';

describe('integration-testing App', () => {
  let page: IntegrationTestingPage;

  beforeEach(() => {
    page = new IntegrationTestingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
