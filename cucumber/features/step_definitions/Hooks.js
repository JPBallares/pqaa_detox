import { Before, After, BeforeAll } from '@cucumber/cucumber';
import detox from 'detox';

// BeforeAll({ timeout: 120 * 1000 }, async () => {
//   await detox.init("ios");
// });
Before({ timeout: 120 * 1000 }, async () => {
  await detox.init("ios");
  await device.launchApp();
  await device.reloadReactNative();
});
After({ timeout: 120 * 1000 }, async () => {
  await detox.cleanup();
});
