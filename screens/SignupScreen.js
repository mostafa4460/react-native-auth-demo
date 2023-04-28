import { useContext, useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";
import { AuthContext } from "../store/auth-context";

function SignupScreen() {
  const [isLoading, setIsloading] = useState(false);
  const { authenticate } = useContext(AuthContext);

  const signupHandler = async ({ email, password }) => {
    setIsloading(true);
    try {
      const token = await createUser(email, password);
      authenticate(token);
    } catch (err) {
      Alert.alert(
        "Authentication failed",
        "Please check your input and try again later."
      );
      setIsloading(false);
    }
  };

  if (isLoading) {
    return <LoadingOverlay message="Creating your account..." />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
