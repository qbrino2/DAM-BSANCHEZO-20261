import { StyleSheet } from "react-native";
import { colors, sizes } from "../../../themes";

export const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    gap: sizes.sm,
    marginTop: sizes.sm,
    width: "90%",
    alignSelf: "center",
    marginBottom: sizes.sm,
  },
  col: {
    flex: 1,
  },
  label: {
    marginBottom: sizes.xs,
    color: colors.black,
    fontSize: sizes.xs + 12,
    fontWeight: "600",
  },
  dollarRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: sizes.xs,
  },
  dollar: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: sizes.md,
  },
});