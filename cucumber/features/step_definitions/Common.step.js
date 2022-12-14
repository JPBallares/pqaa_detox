import { Then, setDefaultTimeout } from '@cucumber/cucumber'
import Utilities from '../helper/Utilities';

setDefaultTimeout(60 * 1000);

Then('I tap on back button', async () => {
    if (device.getPlatform() === 'android') {
        await device.pressBack();
        await Utilities.sleep(5000);
    } else {
        try {
            await element(by.id('header-back')).atIndex(0).tap();
        } catch {
            await element(by.id('header-back')).tap();
        }
    }
});
