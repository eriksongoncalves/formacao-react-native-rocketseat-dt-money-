import { useEffect } from "react";
import { ActivityIndicator, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useAuthContext } from "@/context/auth.context";
import { colors } from "@/shared/colors";

type LoadingProps = {
  setLoading: (value: boolean) => void;
};

export const Loading = ({ setLoading }: LoadingProps) => {
  const { restoreUserSession, handleLogout } = useAuthContext();

  useEffect(() => {
    (async () => {
      try {
        const user = await restoreUserSession();

        if (!user) {
          handleLogout();
        }
      } catch (error) {
        handleLogout();
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <SafeAreaView className="bg-background-primary items-center justify-center flex-1">
      <>
        <Image
          className="h-[48px] w-[255px]"
          source={require("@/assets/Logo.png")}
        />
        <ActivityIndicator color={colors.white} className="mt-20" />
      </>
    </SafeAreaView>
  );
};
