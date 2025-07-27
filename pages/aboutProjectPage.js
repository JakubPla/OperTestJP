class AboutProjectPage {
  constructor(page) {
    this.page = page;

    // === Project details section ===
    this.header = page.locator('h1.header__title', { hasText: 'Project details' });

    this.propertyTypeDropdown = page.locator('input[id*="realtyType"]');
    this.propertyTypeOption = page.locator('span[data-test-option="mortgageSimulatorProjectDetails-realtyType.id-house"]');

    this.projectLocationDropdown = page.locator('//div[contains(@class, "ng-select-container")]//input[starts-with(@id, "region.id")]');
    this.projectLocationOption = page.locator('//span[@data-test-option="mortgageSimulatorProjectDetails-region.id-flanders"]');

    this.propertyPriceInput = page.locator('input[placeholder="Property price"]');

    this.propertyUsageDropdown = page.locator('//input[@role="combobox" and starts-with(@id, "realtyUsageType.id")]');
    this.propertyUsageOption = page.locator('[data-test-option="mortgageSimulatorProjectDetails-realtyUsageType.id-living"]');

    this.saleTypeDropdown = page.locator('//input[@role="combobox" and starts-with(@id, "purchaseSaleType.id")]');
    this.saleTypeOption = page.locator('//span[contains(normalize-space(text()), "Private sale")]');

    this.epcInput = page.locator('//input[@placeholder="EPC score"]');

    // === Contribution section ===
    this.contributionHeader = page.locator('h1.header__title', { hasText: 'Your contribution' });
    this.ownFundsInput = page.locator('input[placeholder="Own funds"]');

    // Next button click
    this.nextButton = page.locator('div.label', { hasText: 'Next' });
  }

  async fillProjectDetails(data) {
    // Wait for "Project details" section
    await this.header.waitFor({ state: 'visible', timeout: 5000 });

    await this.propertyTypeDropdown.click();
    await this.propertyTypeOption.click();

    await this.projectLocationDropdown.click();
    await this.projectLocationOption.click();

    await this.propertyPriceInput.fill(data.propertyPrice);

    await this.propertyUsageDropdown.click();
    await this.propertyUsageOption.click();

    await this.saleTypeDropdown.click();
    await this.saleTypeOption.click();

    await this.epcInput.fill(data.epcScore);

    await this.nextButton.click();

    // === Your contribution ===
    await this.contributionHeader.waitFor({ state: 'visible', timeout: 5000 });
    await this.ownFundsInput.fill(data.ownFunds);

    await this.nextButton.click();
  }
}

module.exports = { AboutProjectPage };
