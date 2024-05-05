import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login, Signup, Welcome, } from "./screens";
import Layout from './screens/Layout';
import useAuth from './hooks/useAuth';
import SectionNavigation from './screens/SectionNavigation';

const Stack = createNativeStackNavigator();

export default function App() {

  const { user } = useAuth();

  console.log(user);
  if (user) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Layout'>
          <Stack.Screen name="Layout" component={Layout} options={{ headerShown: false }} />
          <Stack.Screen name="SectionNavigation" component={SectionNavigation} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome'>
          <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}