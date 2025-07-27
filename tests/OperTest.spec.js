const testData = require('../data/testData.json');

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { AboutProjectPage } = require('../pages/aboutProjectPage');
const { FinancialDetailsPage } = require('../pages/financialDetailsPage');
const { PersonalDetailsPage } = require('../pages/personalDetailsPage');
const { SimulationReportPage } = require('../pages/simulationReportPage'); // add this import

test('end-to-end flow of Simulation Report', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const aboutProjectPage = new AboutProjectPage(page);
  const financialDetailsPage = new FinancialDetailsPage(page);
  const personalDetailsPage = new PersonalDetailsPage(page);
  const simulationReportPage = new SimulationReportPage(page); // create instance

  await page.goto('/login');

  // Login and go through simulation intro pages
  await loginPage.loginAndStartSimulationFlow(testData.email, testData.password);

  // About Project
  await aboutProjectPage.fillProjectDetails(testData);

  // Financial Details
  await financialDetailsPage.fillFinancialDetails({
    ownFunds: testData.ownFunds,
    salary: testData.salary,
    rentCost: testData.rentCost,
    dependent: testData.dependent,
  });

  // Personal Details
  await personalDetailsPage.fillPersonalDetails({
    name: testData.name,
    email: testData.email,
    dateOfBirth: testData.dateOfBirth,
    dependent: testData.dependent,
  });

  // Wait for the simulation report page to load and validate
  await simulationReportPage.waitForReport();
});
