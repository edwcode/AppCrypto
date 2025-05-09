import { AppRegistry } from 'react-native';
import 'react-native-gesture-handler';  // debe ser el primer import
import { enableScreens } from 'react-native-screens';
import App from './App';
import { name as appName } from './app.json';

enableScreens();  // Habilita la utilización de screens nativas
AppRegistry.registerComponent(appName, () => App);