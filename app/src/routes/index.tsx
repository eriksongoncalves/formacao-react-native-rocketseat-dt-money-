import { useCallback, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import { SystemBars } from "react-native-edge-to-edge";

const NavigationRoutes = () => {
  const [user, setUser] = useState();

  const Routes = useCallback(() => {
    return user ? <PrivateRoutes /> : <PublicRoutes />;
  }, [user]);

  return (
    <NavigationContainer>
      <SystemBars style="light" />
      <Routes />
    </NavigationContainer>
  );
};

export default NavigationRoutes;
