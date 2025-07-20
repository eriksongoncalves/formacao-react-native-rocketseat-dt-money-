import { createStackNavigator } from "@react-navigation/stack";

import { Login } from "@/screens/Login";
import { Register } from "@/screens/Register";

export type PublicStackParamsList = {
  Login: undefined;
  Register: undefined;
};

const PublicRoutes = () => {
  const PublicStack = createStackNavigator<PublicStackParamsList>();

  return (
    <PublicStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <PublicStack.Screen name="Login" component={Login} />
      <PublicStack.Screen name="Register" component={Register} />
    </PublicStack.Navigator>
  );
};

export default PublicRoutes;
