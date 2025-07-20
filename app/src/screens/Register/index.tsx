import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { PublicStackParamsList } from "@/routes/PublicRoutes";

type NavigationProps = StackNavigationProp<PublicStackParamsList>;

export const Register = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View className="flex-1 items-center justify-center">
      <Text>Tela de Register!</Text>

      <TouchableOpacity onPress={navigation.goBack}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};
