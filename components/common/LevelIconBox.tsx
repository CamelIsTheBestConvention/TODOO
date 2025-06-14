import { Image, ImageSourcePropType, Text, View } from "react-native";

interface LevelIconBoxProps {
  levelRange: string;
  imageSource: ImageSourcePropType;
  modalWidth: number;
}

const LevelIconBox = ({
  levelRange,
  imageSource,
  modalWidth,
}: LevelIconBoxProps) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={imageSource}
        style={{
          width: Math.max(modalWidth / 9, 25),
          height: Math.max(modalWidth / 9, 25),
          resizeMode: "contain",
          marginBottom: 4,
          alignItems: "center",
          justifyContent: "center",
        }}
      />
      <Text
        style={{
          fontSize: modalWidth > 400 ? 14 : 12,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {levelRange}
      </Text>
    </View>
  );
};
export default LevelIconBox;
