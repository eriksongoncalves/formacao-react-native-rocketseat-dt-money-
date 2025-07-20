import { PropsWithChildren } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import clsx from "clsx";
import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "@/shared/colors";

type AppButtonMode = "fill" | "outline";

type AppButtonProps = PropsWithChildren &
  TouchableOpacityProps & {
    mode?: AppButtonMode;
    iconName?: keyof typeof MaterialIcons.glyphMap;
    widthFull?: boolean;
  };

export const AppButton = ({
  children,
  mode = "fill",
  iconName,
  className,
  widthFull = true,
  ...rest
}: AppButtonProps) => {
  const isFill = mode === "fill";

  return (
    <TouchableOpacity
      {...rest}
      className={clsx(
        "rounded-xl px-5 flex-row items-center h-button",
        widthFull && "w-full",
        className,
        iconName ? "justify-between" : "justify-center",
        {
          "bg-accent-brand": isFill,
          "bg-none border border-accent-brand": !isFill,
        }
      )}
    >
      <Text
        className={clsx("text-base", {
          "text-white": isFill,
          "text-accent-brand": !isFill,
        })}
      >
        {children}
      </Text>

      {iconName && (
        <MaterialIcons
          name={iconName}
          size={24}
          color={isFill ? colors.white : colors["accent-brand"]}
        />
      )}
    </TouchableOpacity>
  );
};
