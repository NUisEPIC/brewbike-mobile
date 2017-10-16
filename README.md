# BrewBike Mobile

## Requirements
* `yarn` - https://yarnpkg.com/
* `node.js` - https://nodejs.org/
	* Yarn installation can install this for you, see install docs

## Getting started
1. Run `yarn` from root directory to install/link dependencies

## Scripts

### Build
* `yarn run build` - builds TypeScript source in `src` into `lib`, including sourcemaps
* `yarn run watch` - builds TypeScript source in `src` into `lib`, including sourcemaps, and watches for changes

### Deploy/Run
* `yarn start` - runs app in development mode
* `yarn run test` - runs the jest test runner on tests
* `yarn run ios` - like `start`, but also attempts to open app in the iOS Simulator if on a Mac and have it installed
* `yarn run android` - like `start`, but also attempts to open app on a connected Android device or emulator

### Other
* `yarn run eject` - see [Create React Native App](https://github.com/react-community/create-react-native-app) docs

## Extra
This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app)

Below you'll find information about performing common tasks. The most recent version of this guide is available [here](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md)
