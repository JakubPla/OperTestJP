class FinancialDetailsPage {
  constructor(page) {
    this.page = page;

    // --- Income Section ---
    this.incomeHeader = page.locator('h1.header__title', { hasText: 'Your income' });
    this.incomeTypeDropdown = page.locator('//input[starts-with(@id, "incomeType.id")]');
    this.salaryOption = page.locator('//span[contains(normalize-space(text()), "Salary (employee)")]');
    this.salaryInput = page.locator('//input[@placeholder="Monthly"]');

    // --- Expenses Section ---
    this.expensesHeader = page.locator('h1.header__title', { hasText: 'Your expenses' });
    this.addExpenseButton = page.locator('//span[normalize-space(text())="Add expense"]');

    // --- Liability Section ---
    this.liabilityTypeDropdown = page.locator('//input[starts-with(@id, "liabilityType.id")]');
    this.rentOption = page.locator('//span[contains(normalize-space(text()), "Rent")]');
    this.rentCostInput = page.locator('//input[@placeholder="Monthly"]');

    // Next button click
    this.nextButton = page.locator('button:has-text("Next")');
  }

  async fillFinancialDetails({ salary, rentCost }) {
    // === Income Section ===
    await this.incomeHeader.waitFor({ state: 'visible', timeout: 5000 });

    await this.incomeTypeDropdown.click();
    await this.salaryOption.click();
    await this.salaryInput.fill(salary);

    await this.nextButton.click();

    // === Expenses Section ===
    await this.expensesHeader.waitFor({ state: 'visible', timeout: 5000 });
    await this.addExpenseButton.click();

    await this.liabilityTypeDropdown.waitFor({ state: 'visible' });
    await this.liabilityTypeDropdown.click();

    // Ensure dropdown is scrollable, Rent might be lower
    await this.rentOption.click();
    await this.rentCostInput.fill(rentCost);

    await this.nextButton.click();
  }
}

module.exports = { FinancialDetailsPage };
