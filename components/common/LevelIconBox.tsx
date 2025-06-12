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
    <View style={{ alignItems: "center", width: modalWidth / 6 - 8 }}>
      <Image
        source={imageSource}
        style={{
          width: Math.max(modalWidth / 7, 36),
          height: Math.max(modalWidth / 7, 36),
          resizeMode: "contain",
          marginBottom: 4,
        }}
      />
      <Text className="text-sm font-semibold">{levelRange}</Text>
    </View>
  );
};
export default LevelIconBox;
