const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;

    // Cookie elements
    this.essentialCookiesButton = page.locator(
      'xpath=//*[@id="cdk-overlay-0"]/oper-client-overlay/div/div/section[2]/div/button[2]'
    );

    // Login elements
    this.emailInput = page.locator('input[placeholder="Enter email"]');
    this.passwordInput = page.locator('input[type="password"][id="password"]');
    this.loginButton = page.locator('button[data-test="button--login"]');

    // Page validation headers
    this.loginPageHeader = page.locator('h1.login-container__header__title', { hasText: 'Log in' });
    this.simulationsHeader = page.locator('h1.header__title', { hasText: 'Simulations' });
    this.welcomeHeader = page.locator('h1.header__title', { hasText: 'Welcome to your home journey!' });
    this.borrowersHeader = page.locator('h1.header__title', { hasText: 'Number of borrowers' });

    // Navigation options
    this.buyPropertyOption = page.locator('div.answer__title', { hasText: 'Buy a property' });
    this.applyAloneOption = page.locator('div.answer__title', { hasText: 'I’m applying by myself' });

    // Simulations
    this.newSimulationBtn = page.locator('//*[@id="shell-container"]/main/oper-client-self-service-application-shell/oper-client-dashboard-shell/oper-client-dashboard-with-milestones-and-notifications/div/section/oper-client-simulations-list-widget/oper-client-mortgage-simulation-card-list/section/oper-client-dashboard-card-item/div/div[1]/oper-client-fontawesome-icon/fa-icon');
  }

  async loginAndStartSimulationFlow(email, password) {
    // Wait for DOM content loaded
    await this.page.waitForLoadState('domcontentloaded');

    // Click essential cookies button - forced as it sometimes failed
    await this.essentialCookiesButton.waitFor({ state: 'visible' });
    await this.essentialCookiesButton.click({ force: true });

    // Wait for login page header after cookies accepted
    await this.loginPageHeader.waitFor({ state: 'visible', timeout: 10000 });

    // Fill login form and submit
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();

    // Wait for simulations page
    await this.simulationsHeader.waitFor({ timeout: 5000 });
    await this.newSimulationBtn.click();

    // Welcome page and click buy property
    await this.welcomeHeader.waitFor({ timeout: 5000 });
    await this.buyPropertyOption.click();

    // Number of borrowers page and click applying alone
    await this.borrowersHeader.waitFor({ timeout: 5000 });
    await this.applyAloneOption.click();
  }
}

module.exports = { LoginPage };
