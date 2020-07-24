/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import * as Sentry from '@sentry/react-native'
import Config from "react-native-config";

Sentry.init({
  dsn: Config.SENTRY_DSN,
});


AppRegistry.registerComponent(appName, () => App);
