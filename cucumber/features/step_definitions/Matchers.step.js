import { Given, When, setDefaultTimeout } from '@cucumber/cucumber';

// default value is 5000ms, adjust timeout base on needs
setDefaultTimeout(60 * 1000);

// text matchers
Given('I tap on the {string} section by text', async (text) => {
    await element(by.text(text)).tap();
});
// {string} will take the value from the feature file and make it as parameter
When('I tap on the {string} by text', async (text) => {
    await element(by.text(text)).tap();
});

// label matchers
When('I tap on component with label {string}', async (label) => {
    // for ios labels can return multiple elements
    // so you should get the first one before tapping
    try {
        await element(by.label(label)).atIndex(0).tap();
    } catch {
        await element(by.label(label)).tap();
    }
});

// id matchers
When('I tap on component with id {string}', async (id) => {
    await element(by.id(id)).tap();
});

When('I long press on component with id {string} for {int} ms', async (id, ms) => {
    await element(by.id(id)).longPress(ms);
});

When('I tap {int} times on component with id {string}', async (n, id) => {
    await element(by.id(id)).multiTap(n);
});

When('I tap at {int}, {int} on component with id {string}', async (x, y, id) => {
    await element(by.id(id)).tap({ x, y });
});

// match by multiple matchers
When('I tap on element with type and text {string}', async (text) => {
    const elType = device.getPlatform() === 'ios' ? 'RCTTextView' : 'android.widget.TextView';
    await element(by.type(elType).and(by.text(text))).tap();
});

When('I tap on element with trait and text {string}', async (text) => {
    await element(by.traits(['staticText']).and(by.text(text))).tap();
});

When('I tap on element with parent id and descendant text {string}', async (text) => {
    await element(by.id('counterButton').withDescendant(by.text(text))).tap();
});

When('I tap on element with child text {string} and ancestor type', async (text) => {
    const elType = device.getPlatform() === 'ios' ? 'RCTView' : 'android.view.ViewGroup';
    await element(by.text(text).withAncestor(by.type(elType))).tap();
});
