import FormInput from "@/components/common/FormInput";
import LayoutBg from "@/components/common/LayoutBg";
import TitleLogo from "@/components/common/TitleLogo";
import { supabase } from "@/supabaseClient";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

const Signup = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPassword =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+~`{}\[\]:;"'<>,.?\\/])[A-Za-z\d!@#$%^&*()_+~`{}\[\]:;"'<>,.?\\/]{8,}$/.test(
      password
    );
  const isPasswordMatched = password === confirmPassword;
  const isFormValid = isValidEmail && isValidPassword && isPasswordMatched;

  const handleSignup = async () => {
    const normalizedEmail = email.trim().toLowerCase();

    const { data: existingUser, error: queryError } = await supabase
      .from("user")
      .select("user_id")
      .eq("email", normalizedEmail);

    if (queryError) {
      Alert.alert("회원가입 실패", "사용자 정보를 불러오지 못했습니다.");
      return;
    }

    if (existingUser && existingUser.length > 0) {
      Alert.alert("중복된 이메일", "이미 가입된 이메일입니다.");
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email: normalizedEmail,
      password,
    });

    if (error) {
      Alert.alert("회원가입 실패", error.message);
      return;
    }

    if (data?.user) {
      Alert.alert(
        "이메일 인증 필요",
        "로그인 하려면 이메일 인증이 필요합니다. 메일함을 확인해 주세요.",
        [{ text: "확인", onPress: () => router.push("/login") }]
      );
    }
  };

  return (
    <LayoutBg>
      <TitleLogo />
      <View className="w-full px-10">
        {/* 이메일 */}
        <FormInput
          value={email}
          onChangeText={setEmail}
          placeholder="이메일"
          keyboardType="email-address"
          isValid={isValidEmail}
          touched={email.length > 0}
          successMessage="✓ 올바른 이메일입니다"
          errorMessage="올바른 이메일 형식을 입력하세요"
        />

        {/* 비밀번호 */}
        <FormInput
          value={password}
          onChangeText={setPassword}
          placeholder="비밀번호"
          secureTextEntry
          isValid={isValidPassword}
          touched={password.length > 0}
          successMessage="✓ 안전한 비밀번호입니다"
          errorMessage="영문, 숫자, 특수문자 포함 8자 이상"
        />

        {/* 비밀번호 확인 */}
        <FormInput
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="비밀번호 확인"
          secureTextEntry
          isValid={isPasswordMatched}
          touched={confirmPassword.length > 0}
          successMessage="✓ 비밀번호가 일치합니다"
          errorMessage="비밀번호가 일치하지 않습니다"
        />

        {/* 회원가입 버튼 */}
        <TouchableOpacity
          testID="signup-button"
          onPress={handleSignup}
          className={`w-full rounded-xl py-4 mb-4 ${
            isFormValid ? "bg-pink-400" : "bg-gray-300"
          }`}
          disabled={!isFormValid}
          accessibilityState={{ disabled: !isFormValid }}
        >
          <Text className="text-white text-center font-semibold">회원가입</Text>
        </TouchableOpacity>
      </View>

      <View className="absolute bottom-6">
        <Text className="text-xs text-gray-400">MoonMiSae</Text>
      </View>
    </LayoutBg>
  );
};

export default Signup;
