import { Stack } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{ title: "Details " + id }} />
      <Text style={{ fontSize: 20 }}>Detail for id : {id}</Text>
    </View>
  );
};

export default ProductDetailsScreen;
