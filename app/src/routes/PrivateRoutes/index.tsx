import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "@/screens/Home";

export type PrivateStackParamsList = {
  Home: undefined;
};

const PrivateRoutes = () => {
  const PrivateStack = createStackNavigator<PrivateStackParamsList>();

  return (
    <PrivateStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <PrivateStack.Screen name="Home" component={Home} />
    </PrivateStack.Navigator>
  );
};

export default PrivateRoutes;
