import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './src/screens/LoginScreen';
import SignupDocScreen from './src/screens/SignupDocScreen';
import SignupPatScreen from './src/screens/SignupPatScreen';
import DoctorsScreen from './src/screens/DoctorsScreen';
import PatientsScreen from './src/screens/PatientsScreen';
import AppointmentScreen from './src/screens/AppointmentScreen';

const navigator = createStackNavigator(
  {
    Login: LoginScreen,
    SignupDoc: SignupDocScreen,
    SignupPat: SignupPatScreen,
    Doctors: DoctorsScreen,
    Patients:PatientsScreen,
    Appointment: AppointmentScreen

  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "App",
      headerTitle:"​Appointment system for doctors",
      headerLeft: ()=>false
    },
  }
);

export default createAppContainer(navigator);