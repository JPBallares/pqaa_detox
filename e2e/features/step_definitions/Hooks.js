import { BeforeAll, Before, AfterAll, After } from '@cucumber/cucumber';
import { init, cleanup, device } from 'detox';
import { detox as config } from '../../../package.json';

BeforeAll({ timeout: 600 * 1000 }, async () => {
    await init(config);
    await device.launchApp({ newInstance: false });
});

Before(async () => {
    // await device.launchApp({ newInstance: true });
    await device.reloadReactNative();
});

AfterAll(async () => {
    await cleanup();
});