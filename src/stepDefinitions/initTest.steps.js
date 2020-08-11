const { Given, Then, When } = require('cucumber');
const { config } = require('../../wdio.conf');

Given(/^I launch the Url$/, () => {
    browser.url(config.baseUrl);
    expect(browser).toHaveTitle('Lloyds Commercial Banking | Login');
});