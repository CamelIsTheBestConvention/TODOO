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
          width: Math.max(modalWidth / 7, 30),
          height: Math.max(modalWidth / 7, 30),
          marginBottom: 4,
        }}
      />
      <Text
        style={{
          fontSize: modalWidth > 400 ? 16 : 14,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {badgeName}
      </Text>
      <Text
        style={{
          fontSize: modalWidth > 400 ? 14 : 12,
          textAlign: "center",
        }}
        className="text-gray-500"
      >
        {description}
      </Text>
    </View>
  );
};
export default BadgeIconBox;
