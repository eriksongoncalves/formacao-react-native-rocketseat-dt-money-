import { useCallback, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";

const NavigationRoutes = () => {
  const [user, setUser] = useState();

  const Routes = useCallback(() => {
    return user ? <PrivateRoutes /> : <PublicRoutes />;
  }, [user]);

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default NavigationRoutes;
