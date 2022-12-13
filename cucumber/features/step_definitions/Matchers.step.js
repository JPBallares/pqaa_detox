import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';

setDefaultTimeout(60 * 1000);

Given('I tap on the {string} section by text', async (text) => {
    await element(by.text(text)).tap();
});
// {string} will take the value from the feature file and make it as parameter
When('I tap on the {string} by text', async (text) => {
    await element(by.text(text)).tap();
});
