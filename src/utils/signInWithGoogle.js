import * as Google from "expo-google-app-auth";

import CLIENT_ID from "../config/auth";

const signInWithGoogle = async () => {
  try {
    const result = await Google.logInAsync(CLIENT_ID);

    if (result.type === "success") {
      const { name, email, photoUrl } = result.user;

      const userData = {
        user_type: "patient",
        picture: photoUrl,
        name,
        email,
      };

      return userData;
    } else {
      return { result: "cancelled" };
    }
  } catch (error) {
    return { result: "error" };
  }
};

export default signInWithGoogle;
