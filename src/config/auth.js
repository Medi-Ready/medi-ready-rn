import { IOS_CLIENT_ID, ANDROID_CLIENT_ID } from "@env";

const CLIENT_ID = {
  androidClientId: ANDROID_CLIENT_ID,
  iosClientId: IOS_CLIENT_ID,
  scopes: ["profile", "email"],
};

export default CLIENT_ID;
