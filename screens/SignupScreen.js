import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";

function SignupScreen() {
  const [isLoading, setIsloading] = useState(false);

  const signupHandler = async ({ email, password }) => {
    setIsloading(true);
    await createUser(email, password);
    setIsloading(false);
  };

  if (isLoading) {
    return <LoadingOverlay message="Creating your account..." />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
