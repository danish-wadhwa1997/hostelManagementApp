/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LandingPage from '../LandingPage/LandingPage';
import {RFValue} from 'react-native-responsive-fontsize';
import HostelsContainer from '../Hostels';
import About from '../About/About';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from 'react-native-paper';
import Header from '../Common/Header';
import ProfileStack from './ProfileStack';
import {useContext} from 'react';
import {AuthContext} from '../Context/AuthContext';
import UnAuthStack from './AuthStack';
import AppStack from './AppStack';
import BookingRequest from '../BookingRequest/BookingRequest';
import Meals from '../Meals/Meals';

const Tab = createBottomTabNavigator();
const ICON_SIZE = RFValue(24);
const BottomTabs = () => {
  const theme = useTheme();
  const {userAuthorized} = useContext(AuthContext);
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: props => <Header {...props} />,
        tabBarStyle: {
          backgroundColor: theme.colors.primaryContainer,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.error,
        tabBarInactiveTintColor: theme.colors.primary,
      }}>
      <Tab.Screen
        name="Hostels"
        component={HostelsContainer}
        options={{
          tabBarAccessibilityLabel: 'Search Hostels',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="magnify"
              color={color}
              size={ICON_SIZE}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Meals"
        component={Meals}
        options={{
          tabBarAccessibilityLabel: 'Meals',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="food"
              color={color}
              size={ICON_SIZE}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={LandingPage}
        options={{
          tabBarAccessibilityLabel: 'Home',
          unmountOnBlur: true,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="home"
              color={color}
              size={ICON_SIZE}
            />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarAccessibilityLabel: 'About Us',
          unmountOnBlur: true,

          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="information"
              color={color}
              size={ICON_SIZE}
            />
          ),
        }}
      />
      {userAuthorized ? (
        <>
          <Tab.Screen
            name="Profile"
            component={ProfileStack}
            options={{
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              // tabBarButton: props => null,
              unmountOnBlur: true,
              tabBarStyle: {display: 'none'},
              header: props => null,
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons
                  name="account-outline"
                  color={color}
                  size={ICON_SIZE}
                />
              ),
            }}
          />
        </>
      ) : (
        <Tab.Screen
          name="Auth"
          component={UnAuthStack}
          options={{
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            // tabBarButton: props => null,
            unmountOnBlur: true,
            tabBarStyle: {display: 'none'},
            header: props => null,
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="login"
                color={color}
                size={ICON_SIZE}
              />
            ),
          }}
        />
      )}
      <Tab.Screen
        name="AppStack"
        component={AppStack}
        options={{
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          tabBarButton: props => null,
          unmountOnBlur: true,
          tabBarStyle: {display: 'none'},
        }}
      />
      <Tab.Screen
        name="BookRoom"
        component={BookingRequest}
        options={{
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          tabBarButton: props => null,
          unmountOnBlur: true,
          tabBarStyle: {display: 'none'},
          header: props => null,
        }}
        initialParams={{hostel: ''}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
