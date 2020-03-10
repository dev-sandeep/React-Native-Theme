
import { createDrawerNavigator } from 'react-navigation-drawer';

import FullButton from '../Components/Screens/FullButton';
import News from '../Pages/News';
import Login from './../Components/Screens/Login'
import NewsDetail from './../Pages/NewsDetail'

const DrawerNavigator = createDrawerNavigator({
  News: News,
  FullBtn: FullButton,
  Login: Login,
  Detail: NewsDetail
});

export default DrawerNavigator;