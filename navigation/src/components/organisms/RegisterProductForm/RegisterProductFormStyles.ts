import { StyleSheet } from "react-native";
import { colors, sizes } from "../../../themes";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: sizes.md,
    paddingTop: sizes.xxl + sizes.md,
    paddingBottom: sizes.lg,
  },
  title: {
    fontSize: sizes.xl,
    fontWeight: "bold",
    color: colors.primary,
    marginLeft: "5%",
  },
  subtitle: {
    fontSize: sizes.xs + 15,
    color: colors.gray400,
    marginLeft: "5%",
    marginBottom: sizes.lg,
  },
  fieldLabel: {
    fontSize: sizes.xs + 6,
    fontWeight: "600",
    color: colors.black,
    marginLeft: "5%",
    marginBottom: sizes.xs,
  },
  textArea: {
    minHeight: sizes.xxl * 2,
    marginBottom: sizes.md,
  },
  backBtn: {
    alignItems: "center",
    marginTop: sizes.md,
    fontWeight: "600",
  },
  backText: {
    color: colors.primary,
    fontSize: sizes.sm + 10,
  },
  
});