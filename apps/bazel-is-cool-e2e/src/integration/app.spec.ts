import { getGreeting } from '../support/app.po';

describe('bazel-is-cool', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to bazel-is-cool!');
  });
});
