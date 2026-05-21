import { StyleSheet } from "react-native";
import { colors, sizes } from "../../themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: sizes.md,
    paddingTop: sizes.xxl + sizes.md,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: sizes.md,
  },
  welcome: {
    fontSize: sizes.sm + 30,
    color: colors.black,
  },
  username: {
    fontSize: sizes.sm + 28,
    fontWeight: "bold",
    color: colors.primary,
  },
  logoutBtn: {
    backgroundColor: colors.secondary,
    padding: sizes.sm + 2,
    borderRadius: sizes.radiusMd,
  },
  logoutText: {
    color: colors.white,
    fontWeight: "bold",
  },
  newProductBtn: {
    backgroundColor: colors.primary,
    padding: sizes.sm + 4,
    borderRadius: sizes.radiusMd,
    alignItems: "center",
    marginBottom: sizes.md,
  },
  newProductText: {
    color: colors.white,
    fontWeight: "bold",
  },
  searchInput: {
    width: "90%",
    height: sizes.inputHeight,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: colors.gray200,
    borderRadius: sizes.radiusMd,
    paddingHorizontal: sizes.md,
    marginBottom: sizes.md,
    backgroundColor: colors.white,
    color: colors.black,
  },
  sectionTitle: {
    fontSize: sizes.sm + 4,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: sizes.sm + 2,
  },
  productCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.gray100,
    padding: sizes.sm + 4,
    borderRadius: sizes.radiusMd,
    marginBottom: sizes.sm + 2,
  },
  productName: {
    fontWeight: "bold",
    color: colors.black,
  },
  productInfo: {
    fontSize: sizes.sm + 4,
    color: colors.gray400,
  },
  sellBtn: {
    backgroundColor: colors.primary,
    padding: sizes.sm,
    borderRadius: sizes.radiusSm,
  },
  sellText: {
    color: colors.white,
    fontSize: sizes.sm + 4,
    fontWeight: "bold",
  },
  empty: {
    textAlign: "center",
    color: colors.gray400,
    marginTop: sizes.xxl,
  },
});