class SimulationReportPage {
  constructor(page) {
    this.page = page;

    this.reportHeader = page.locator('h1.title', { hasText: 'Mortgage overview' });
    this.totalProjectCostHeader = page.locator('h2', { hasText: 'Total project cost' });
  }

  async waitForReport() {
    // Wait and verify the main report header is visible - had to add an explicit wait because the page failed loading sometimes
    //await this.page.waitForLoadState('networkidle');
    await this.reportHeader.waitFor({ state: 'visible', timeout: 10000 });
    const reportHeaderVisible = await this.reportHeader.isVisible();
    if (!reportHeaderVisible) {
      throw new Error('Simulation report main header "Mortgage overview" is not visible.');
    }

    // Wait and verify the total project cost header is visible - selected 2 which are main points but could also latch onto other elements if needed
    const totalProjectCostVisible = await this.totalProjectCostHeader.isVisible();
    if (!totalProjectCostVisible) {
      throw new Error('Total project cost header is not visible.');
    }

    // Verify the page contains the necessary text
    const bodyText = await this.page.locator('body').innerText();
    if (!bodyText || bodyText.trim().length === 0) {
      throw new Error('Simulation report page is empty — no visible text found.');
    }

    // Wait for 10 seconds before finishing - just in case
    await this.page.waitForTimeout(10000);
  }
}

module.exports = { SimulationReportPage };
