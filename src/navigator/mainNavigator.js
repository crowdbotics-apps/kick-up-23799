import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps192113Navigator from '../features/Maps192113/navigator';
import Additem192112Navigator from '../features/Additem192112/navigator';
import Maps192108Navigator from '../features/Maps192108/navigator';
import UserProfile192104Navigator from '../features/UserProfile192104/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps192113: { screen: Maps192113Navigator },
Additem192112: { screen: Additem192112Navigator },
Maps192108: { screen: Maps192108Navigator },
UserProfile192104: { screen: UserProfile192104Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
