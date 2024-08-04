import { Text, TouchableOpacity, View } from "react-native";

const Home = () => {
  return (
    <View className="h-full w-full bg-red-500 justify-center items-center">
      <Text className="text-3xl text-white">HELLO</Text>
      <TouchableOpacity className="bg-purple-500 pl-10 pr-10 pt-5 pb-5">
        <Text>HI!</Text>
      </TouchableOpacity>
      <Text>WHAT</Text>
      <Tex>ERROR</Tex>
    </View>
  );
};

export default Home;
