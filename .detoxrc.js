module.exports = {
  "configurations": {
      "ios.sim.debug": {
          "binaryPath": "ios/build/Build/Products/Debug-iphonesimulator/pqaa_detox.app",
          "build": "xcodebuild -workspace ios/pqaa_detox.xcworkspace -scheme pqaa_detox -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build",
          "type": "ios.simulator",
          "device": {
              "id": "D4DC1A7A-690E-41C2-82C5-882294DF510B",
          }
      },
      "android.emu.debug": {
          "binaryPath": "android/app/build/outputs/apk/debug/app-debug.apk",
          "build": "cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug && cd ..",
          "type": "android.emulator",
          "device": {
              "avdName": "Pixel_4a_API_30",
          }
      }
  }
}