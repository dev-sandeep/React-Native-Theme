
import { createDrawerNavigator } from 'react-navigation-drawer';

import ScreenOne from '../Components/Screens/Screen1';
import ScreenTwo from '../Components/Screens/Screen2';

const DrawerNavigator = createDrawerNavigator({
  One: ScreenOne,
  Two: ScreenTwo
});

export default DrawerNavigator;