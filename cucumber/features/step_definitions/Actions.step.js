import { When, setDefaultTimeout } from "@cucumber/cucumber";

setDefaultTimeout(60 * 1000);

When('I type {string} in {string}', async (input, id) => {
    await element(by.id(id)).typeText(input);
});

When('I replace {string} in {string}', async (input, id) => {
    await element(by.id(id)).typeText(input);
});

When('I clear text in {string}', async (id) => {
    await element(by.id(id)).clearText();
});

When('I tap backspace key in {string}', async (id) => {
    await element(by.id(id)).tapBackspaceKey();
});

When('I tap return key in {string}', async (id) => {
    await element(by.id(id)).tapReturnKey();
});