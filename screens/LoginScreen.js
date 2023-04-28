import { useContext, useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { login } from "../util/auth";
import { Alert } from "react-native";
import { AuthContext } from "../store/auth-context";

function LoginScreen() {
  const [isLoading, setIsloading] = useState(false);
  const { authenticate } = useContext(AuthContext);

  const loginHandler = async ({ email, password }) => {
    setIsloading(true);
    try {
      const token = await login(email, password);
      authenticate(token);
    } catch (err) {
      Alert.alert("Authentication failed", "Please check your credentials...");
      setIsloading(false);
    }
  };

  if (isLoading) {
    return <LoadingOverlay message="Validating credentials..." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
