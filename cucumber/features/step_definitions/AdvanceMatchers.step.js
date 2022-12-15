import { Given, Then, setDefaultTimeout } from '@cucumber/cucumber';

setDefaultTimeout(60 * 1000)

Given('I tap on home component with {string} section', async (section) => {
    await element(by.id(`${section}-home-component`)).tap();
});

Given('I tap on the {string} title and image', async (continent) => {
    await element(by.id(`list-title-${continent}`)).tap();
    await element(by.id(`image-title-${continent}-${0}`)).tap();
    await element(by.id(`image-${continent}-${0}`)).tap();
});

Then('I should see component with id {string}', async (id) => {
    await expect(element(by.id(id))).toBeVisible();
});
