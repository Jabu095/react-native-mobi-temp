import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import TutorialScreen from './src/screens/splashScreen';
import LoginScreen from './src/screens/accountScreen/loginScreen';

const RootStack = createStackNavigator({
  Home: LoginScreen,
});
const Navigation = createAppContainer(RootStack);
export default Navigation;
