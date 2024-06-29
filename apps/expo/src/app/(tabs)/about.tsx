import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

export const About = () => {
  return (
    <SafeAreaView className="bg-background">
      {/* Changes page title visible on the header */}
      <Stack.Screen options={{ title: "About" }} />
      <View className="h-full w-full bg-background p-4">
        <Text
          className="text-8 px-2 pb-2
        pt-8"
        >
          About the app
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default About;