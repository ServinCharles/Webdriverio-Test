const { Given, Then, When, And } = require('cucumber');
const LoginPage = require('../pages/loginPage');
//const { enterUserName} = require('../pages/loginPage');
const loginPage = new LoginPage();

When(/^I enter username (.*)$/, (username) => {
   loginPage.enterUserName(username);
});

When(/^I enter password (.*)$/, (password) => {
    loginPage.enterPassword(password);
});

Then(/^I click on login button$/, () => {
    loginPage.clickSubmit();
});