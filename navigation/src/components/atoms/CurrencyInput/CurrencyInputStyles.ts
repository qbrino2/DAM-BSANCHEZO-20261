import { StyleSheet } from "react-native";
import { colors, sizes } from "../../../themes";

export const styles = StyleSheet.create({
  input: {
    width: "90%",
    height: sizes.inputHeight,
    alignSelf: "center",
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: sizes.radiusMd,
    paddingHorizontal: sizes.md,
    marginTop: sizes.xxs,
    backgroundColor: colors.white,
    color: colors.secondary,
  }
});