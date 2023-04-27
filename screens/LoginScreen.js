import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { login } from "../util/auth";
import { Alert } from "react-native";

function LoginScreen() {
  const [isLoading, setIsloading] = useState(false);

  const loginHandler = async ({ email, password }) => {
    setIsloading(true);
    try {
      await login(email, password);
    } catch (err) {
      Alert.alert("Authentication failed", "Please check your credentials...");
    }
    setIsloading(false);
  };

  if (isLoading) {
    return <LoadingOverlay message="Validating credentials..." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
