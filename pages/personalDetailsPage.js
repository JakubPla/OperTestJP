class PersonalDetailsPage {
  constructor(page) {
    this.page = page;

    // Header verification
    this.header = page.locator('h1.header__title', { hasText: 'Personal details' });

    // Form inputs
    this.birthDateInput = page.locator('//input[@placeholder="dd/mm/yyyy"]');
    this.dependentsInput = page.locator('//input[@placeholder="Number of dependents"]');

    // Navigation
    this.nextButton = page.locator('button:has-text("Next")');
  }

  async fillPersonalDetails({ dateOfBirth, dependent }) {
    // Ensure correct page is on
    await this.header.waitFor({ state: 'visible', timeout: 5000 });

    // Fill inputs - added paste D.O.B. for quickness but could add a date picker if needed

    await this.birthDateInput.type('05/05/1980', { delay: 100 });
    await this.dependentsInput.fill('2');

    // Next button click
    await this.nextButton.click();
  }
}

module.exports = { PersonalDetailsPage };
