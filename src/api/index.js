import { DOMAIN } from "@env";

export const loginRequest = async (userData) => {
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

export const logoutRequest = async () => {
  try {
    const response = await fetch(`${DOMAIN}/api/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
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

export const authCheck = async (token) => {
  try {
    const response = await fetch(`${DOMAIN}/api/auth-check`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
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

export const getPrescriptionList = async (token) => {
  try {
    const response = await fetch(`${DOMAIN}/prescriptions`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
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

export const createPrescriptionList = async (token, prescriptionData) => {
  try {
    const response = await fetch(`${DOMAIN}/prescriptions/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(prescriptionData),
    });

    if (!response.ok) {
      return;
    }

    return await response.json();
  } catch (error) {
    return { result: "error" };
  }
};

export const updatePrescription = async (token, prescriptionId, prescriptionData) => {
  try {
    const response = await fetch(`${DOMAIN}/prescriptions/${prescriptionId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(prescriptionData),
    });

    if (!response.ok) {
      return;
    }

    return await response.json();
  } catch (error) {
    return { result: "error" };
  }
};

export const deletePrescription = async (token, prescriptionId) => {
  try {
    const response = await fetch(`${DOMAIN}/prescriptions/${prescriptionId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      return;
    }

    return await response.result;
  } catch (error) {
    return { result: "error" };
  }
};
