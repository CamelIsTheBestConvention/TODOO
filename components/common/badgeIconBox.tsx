import { Image, ImageSourcePropType, Text, View } from "react-native";

interface BadgeIconBoxProps {
  badgeName: string;
  imageSource: ImageSourcePropType;
  description: string;
  modalWidth: number;
}

const BadgeIconBox = ({
  badgeName,
  imageSource,
  description,
  modalWidth,
}: BadgeIconBoxProps) => {
  return (
    <View style={{ alignItems: "center", width: modalWidth / 4 - 8 }}>
      <Image
        source={imageSource}
        style={{
          width: Math.max(modalWidth / 6, 36),
          height: Math.max(modalWidth / 6, 36),
          marginBottom: 4,
        }}
      />
      <Text className="text-base font-semibold">{badgeName}</Text>
      <Text className="text-sm text-gray-500">{description}</Text>
    </View>
  );
};
export default BadgeIconBox;
