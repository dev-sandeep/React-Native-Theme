
import { createDrawerNavigator } from 'react-navigation-drawer';

import FullButton from '../Components/Screens/FullButton';
import CardList from '../Components/Screens/CardList';
import News from '../Pages/News';

const DrawerNavigator = createDrawerNavigator({
  News: News,
  FullBtn: FullButton,
  CardList: CardList
});

export default DrawerNavigator;