import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import PersonIcon from '../../assets/svg/person';
import Text from 'libs/ui/text/text';
import {SafeAreaView, View} from 'react-native';
import {HomeScreen} from 'screens';
import HomeIcon from '../../assets/svg/home';
import WalletIcon from '../../assets/svg/wallet';
import GearIcon from '../../assets/svg/gear';
import { colors } from 'libs/ui';
import BottomBar from 'libs/ui/bottom-navigation';
import Header from 'libs/ui/header';

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
  const renderTabBar = (props: BottomTabBarProps) => {
    return (
      <BottomBar bottomTabBar={props}/>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        header: () => <Header />,
      }}
      
      tabBar={renderTabBar}>
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
};
