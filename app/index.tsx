import type { LinkProps } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import AppCard from "../components/AppCard";

export default function Index() {
  // const router = useRouter();

  type AppItem = {
    name: string;
    route: LinkProps["href"];
    iconName: keyof typeof import("@expo/vector-icons").MaterialIcons.glyphMap;
  };

  const apps: AppItem[] = [
    {
      name: "Task Manager",
      route: "/(tabs)/tasks",
      iconName: "check-circle",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>AppVet</Text>
      <View style={styles.grid}>
        {apps.map((app) => (
          <AppCard
            key={app.name}
            name={app.name}
            iconName={app.iconName}
            href={app.route}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  title: {
    paddingTop: 50,
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
