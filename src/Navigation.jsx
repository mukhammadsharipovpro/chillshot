import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS} from './helpers/colors';
import ChillShotHomeScreen from './pages/ChillShotHomeScreen';
import ChillShotCartScreen from './pages/ChillShotCartScreen';
import ChillShotCartSuccessScreen from './pages/ChillShotCartSuccessScreen';
import ChillShotReservationScreen from './pages/ChillShotReservationScreen';
import ChillShotReservationSuccessScreen from './pages/ChillShotReserveSuccessScreen';
import ChillShotContactsScreen from './pages/ChillShotContactsScreen';
import ChillShotTranslationsScreen from './pages/ChillShotTranslationsScreen';
import CloseIcon from './assets/close_icon.png';
import CartIcon from './assets/cart_icon.png';
import Logo from './assets/logo.png';
import BackgroundImage from './assets/background.png';

const {width, height} = Dimensions.get('window');
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width,
          height,
          backgroundColor: COLORS.white,
        },
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      {drawerScreens.map(({name, component}) => (
        <Drawer.Screen key={name} name={name} component={component} />
      ))}
    </Drawer.Navigator>
  );
}

function CustomDrawerContent(props) {
  const navigation = useNavigation();

  const drawerItems = [
    {label: 'МЕНЮ', screen: 'ChillShotHomeScreen'},
    {label: 'ТРАНСЛЯЦИИ', screen: 'ChillShotTranslationsScreen'},
    {label: 'КОНТАКТЫ', screen: 'ChillShotContactsScreen'},
    {label: 'БРОНЬ СТОЛИКА', screen: 'ChillShotReservationScreen'},
  ];

  const navigateToScreen = screen => {
    navigation.navigate('DrawerNavigator', {screen});
  };

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <View style={styles.closeIconContainer}>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Image source={CloseIcon} style={styles.closeIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
      </View>

      <View style={styles.mainContainer}>
        {drawerItems.map(({label, screen}) => (
          <TouchableOpacity
            key={screen}
            onPress={() => navigateToScreen(screen)}
            style={styles.drawerItem}>
            <Text style={styles.itemText}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity onPress={() => navigateToScreen('ChillShotCartScreen')}>
        <Image source={CartIcon} style={styles.cartIcon} />
      </TouchableOpacity>
    </ImageBackground>
  );
}

const drawerScreens = [
  {name: 'ChillShotHomeScreen', component: ChillShotHomeScreen},
  {name: 'ChillShotCartScreen', component: ChillShotCartScreen},
  {name: 'ChillShotCartSuccessScreen', component: ChillShotCartSuccessScreen},
  {name: 'ChillShotReservationScreen', component: ChillShotReservationScreen},
  {
    name: 'ChillShotReservationSuccessScreen',
    component: ChillShotReservationSuccessScreen,
  },
  {name: 'ChillShotContactsScreen', component: ChillShotContactsScreen},
  {
    name: 'ChillShotTranslationsScreen',
    component: ChillShotTranslationsScreen,
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 60,
    height: height,
    width: width,
  },
  closeIconContainer: {
    position: 'absolute',
    right: 20,
    bottom: 40,
  },
  closeIcon: {
    width: 25,
    height: 25,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
    marginTop: 40,
  },
  logo: {
    width: width * 0.8,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  mainContainer: {
    marginTop: '8%',
    alignItems: 'flex-end',
    width: width * 0.9,
    justifyContent: 'flex-start',
    alignSelf: 'flex-end',
    borderRadius: 12,
    paddingVertical: 25,
  },
  drawerItem: {
    justifyContent: 'center',
    width: '80%',
    marginTop: 15,
    paddingVertical: 12,
    backgroundColor: COLORS.main,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  itemText: {
    fontSize: 24,
    fontFamily: FONTS.black,
    color: COLORS.white,
    textAlign: 'center',
  },
  cartIcon: {
    width: 60,
    height: 70,
    alignSelf: 'center',
    objectFit: 'contain',
    position: 'absolute',
    top: 100,
  },
});
