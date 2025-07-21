import { View } from "react-native";

import { DismissKeyboardView } from "@/components/DismissKeyboardView";
import { AuthHeader } from "@/components/AuthHeader";
import { LoginForm } from "./LoginForm";

export const Login = () => {
  return (
    <DismissKeyboardView>
      <DismissKeyboardView>
        <View className="flex-1 w-[82%] self-center">
          <AuthHeader />
          <LoginForm />
        </View>
      </DismissKeyboardView>
    </DismissKeyboardView>
  );
};
