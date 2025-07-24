import { MaterialIcons } from "@expo/vector-icons";
import type { LinkProps } from "expo-router";
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  name: string;
  iconName: keyof typeof MaterialIcons.glyphMap;
  href: LinkProps["href"];
};

export default function AppCard({ name, iconName, href }: Props) {
  return (
    <Link href={href} asChild>
      <Pressable style={styles.card}>
        <MaterialIcons name={iconName} size={48} color="#333" />

        <Text style={styles.name}>{name}</Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 140,
    height: 160,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    elevation: 4,
    justifyContent: "center",
    alignItems: "center",
    margin: 12,
  },
  icon: {
    width: 64,
    height: 64,
    marginBottom: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
