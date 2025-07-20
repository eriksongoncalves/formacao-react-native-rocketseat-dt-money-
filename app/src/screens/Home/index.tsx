import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { PrivateStackParamsList } from "@/routes/PrivateRoutes";

type NavigationProps = StackNavigationProp<PrivateStackParamsList>;

export const Home = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View className="flex-1 items-center justify-center">
      <Text>Tela de Home!</Text>
    </View>
  );
};
