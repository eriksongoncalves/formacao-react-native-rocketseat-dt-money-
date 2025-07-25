import { ActivityIndicator, Text, View } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { AppButton } from "@/components/AppButton";
import { AppInput } from "@/components/AppInput";
import { PublicStackParamsList } from "@/routes/PublicRoutes";
import { colors } from "@/shared/colors";
import { useAuthContext } from "@/context/auth.context";
import { useErrorHandler } from "@/shared/hooks/useErrorHandler";
import { AppError } from "@/shared/helpers/AppError";
import { schema } from "./schema";

export interface FormRegisterParams {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}

export const RegisterForm = () => {
  const navigation = useNavigation<NavigationProp<PublicStackParamsList>>();

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormRegisterParams>({
    defaultValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(schema),
  });

  const { handleRegister } = useAuthContext();
  const { handleError } = useErrorHandler();

  const onSubmit = async (userData: FormRegisterParams) => {
    try {
      await handleRegister(userData);
    } catch (error) {
      if (error instanceof AppError) {
        handleError(error, "Falha ao cadastrar usuário");
      }
    }
  };

  return (
    <>
      <AppInput
        control={control}
        name="name"
        placeholder="Seu nome"
        lable="NOME"
        leftIconName="person"
      />

      <AppInput
        control={control}
        name="email"
        lable="EMAIL"
        leftIconName="mail-outline"
        placeholder="mail@example.br"
      />

      <AppInput
        control={control}
        name="password"
        lable="SENHA"
        placeholder="Sua senha"
        leftIconName="lock-outline"
        secureTextEntry
      />

      <AppInput
        control={control}
        name="confirmPassword"
        lable="SENHA"
        leftIconName="lock-outline"
        placeholder="Confirme sua senha"
        secureTextEntry
      />

      <View className="flex-1 justify-between mt-8 mb-6 min-h-[250px]">
        <AppButton onPress={handleSubmit(onSubmit)} iconName="arrow-forward">
          {!isSubmitting ? (
            <ActivityIndicator color={colors.white} />
          ) : (
            "Cadastrar"
          )}
        </AppButton>

        <View>
          <Text className="mb-6 text-gray-300 text-base">
            Já possui uma conta?
          </Text>
          <AppButton
            onPress={() => navigation.navigate("Login")}
            iconName="arrow-forward"
            mode="outline"
          >
            Acessar
          </AppButton>
        </View>
      </View>
    </>
  );
};
