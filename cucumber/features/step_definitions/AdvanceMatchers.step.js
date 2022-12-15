import { Given, When, setDefaultTimeout } from '@cucumber/cucumber';

setDefaultTimeout(60 * 1000)

Given('I tap on home component with {string} section', async (section) => {
    await element(by.id(`${section}-home-component`)).tap();
});
