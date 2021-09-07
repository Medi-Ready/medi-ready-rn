import * as SecureStore from "expo-secure-store";

export const setSecureStoreItem = async (key, value) => {
  await SecureStore.setItemAsync(key, value);
};

export const getSecureStoreItem = async (key) => {
  const token = await SecureStore.getItemAsync(key);

  return token;
};

export const deleteSecureStoreItem = async (key) => {
  return await SecureStore.deleteItemAsync(key);
};
