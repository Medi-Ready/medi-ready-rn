import { DOMAIN } from "@env";

export const login = async (userData) => {
  try {
    const response = await fetch(`${DOMAIN}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      return;
    }

    return await response.json();
  } catch (error) {
    return { result: "error" };
  }
};

export const authCheck = async (token) => {
  try {
    const response = await fetch(`${DOMAIN}/api/auth-check`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `bearer ${token}`,
      },
    });

    if (!response.ok) {
      return;
    }

    return await response.json();
  } catch (error) {
    return { result: "error" };
  }
};
