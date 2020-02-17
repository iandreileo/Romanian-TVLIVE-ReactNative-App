import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Menu from './Menu';
import Live from './Video';
import MainScreen from './MainScreen';

const RootStack = createStackNavigator(
    {
        Acasa: {
            screen: Menu,
            // navigationOptions: { headerShown: false},
          },
          Live: {
            screen: Live,
            navigationOptions: { headerShown: false},
          },
          MainScreen: {
            screen: MainScreen,
          }
        //   TVR1: {
        //     screen: TVR1,
        //     navigationOptions: { headerShown: false},
        //   },
        //   PROTVNEWS: {
        //     screen: PROTVNEWS,
        //     navigationOptions: { headerShown: false},
        //   },
        //   REALITATEA: {
        //     screen: REALITATEA,
        //     navigationOptions: { headerShown: false},
        //   },
        //   B1TV: {
        //     screen: B1TV,
        //     navigationOptions: { headerShown: false},
        //   },
        //   DIGI24: {
        //     screen: DIGI24,
        //     navigationOptions: { headerShown: false},
        //   },
        //   UTV: {
        //     screen: UTV,
        //     navigationOptions: { headerShown: false},
        //   },
        //   KISSTV: {
        //     screen: KISSTV,
        //     navigationOptions: { headerShown: false},
        //   },
        //   AntenaStars: {
        //     screen: AntenaStars,
        //     navigationOptions: { headerShown: false},
        //   },
        //   DiasporaTV: {
        //     screen: DiasporaTV,
        //     navigationOptions: { headerShown: false},
        //   },
        //   MOOZDANCE: {
        //     screen: MOOZDANCE,
        //     navigationOptions: { headerShown: false},
        //   },
    },
    {
    initialRouteName: 'Acasa',
    headerStyle: {
        headerShown: false
      //Background Color of Navigation Bar
    },
    // headerTintColor: '#606070',
    // //Text Color of Navigation Bar
    //de modificat aici bara de sus
  }
  );

const MyNavigator = createAppContainer(RootStack);
export default MyNavigator;