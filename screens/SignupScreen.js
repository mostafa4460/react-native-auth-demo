import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";

function SignupScreen() {
  const [isLoading, setIsloading] = useState(false);

  const signupHandler = async ({ email, password }) => {
    setIsloading(true);
    try {
      await createUser(email, password);
    } catch (err) {
      Alert.alert(
        "Authentication failed",
        "Please check your input and try again later."
      );
    }
    setIsloading(false);
  };

  if (isLoading) {
    return <LoadingOverlay message="Creating your account..." />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
