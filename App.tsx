import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './src/screens/LoginScreen';

const navigator = createStackNavigator(
  {
    Loggin: LoginScreen,

  },
  {
    initialRouteName: "Loggin",
    defaultNavigationOptions: {
      title: "App",
      headerTitle:"​Appointment system for doctors",
      headerLeft: ()=>false
    },
  }
);

export default createAppContainer(navigator);