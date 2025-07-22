import { useCallback, useState } from "react";
import { SystemBars } from "react-native-edge-to-edge";
import { NavigationContainer } from "@react-navigation/native";

import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import { useAuthContext } from "@/context/auth.context";

const NavigationRoutes = () => {
  const { token, user } = useAuthContext();

  const Routes = useCallback(() => {
    return !user || !token ? <PublicRoutes /> : <PrivateRoutes />;
  }, [user]);

  return (
    <NavigationContainer>
      <SystemBars style="light" />
      <Routes />
    </NavigationContainer>
  );
};

export default NavigationRoutes;
