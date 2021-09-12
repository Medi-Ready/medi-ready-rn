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

    if (response.ok) {
      return await response.json();
    }

    throw new Error(response.error.message);
  } catch (error) {
    throw new Error(error.message);
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

    if (response.ok) {
      return await response.json();
    }

    throw new Error(response.error.message);
  } catch (error) {
    throw new Error(error.message);
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

    if (response.ok) {
      return await response.json();
    }

    throw new Error(response.error.message);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const requestPrescriptionList = async () => {
  try {
    const response = await fetch(`${DOMAIN}/api/prescriptions`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (response.ok) {
      return await response.json();
    }

    throw new Error(response.error.message);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const queuePharmacy = async (userId) => {
  try {
    const response = await fetch(`${DOMAIN}/api/queue`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ userId }),
    });

    if (response.ok) {
      return await response.json();
    }

    throw new Error(response.error.message);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const createPrescriptionList = async (prescriptionData) => {
  try {
    const response = await fetch(`${DOMAIN}/api/prescriptions/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(prescriptionData),
    });

    if (response.ok) {
      return await response.json();
    }

    throw new Error(response.error.message);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updatePrescription = async (prescriptionId, prescriptionData) => {
  try {
    const response = await fetch(`${DOMAIN}/api/prescriptions/${prescriptionId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(prescriptionData),
    });

    if (response.ok) {
      return await response.json();
    }

    throw new Error(response.error.message);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deletePrescription = async (prescriptionId) => {
  try {
    const response = await fetch(`${DOMAIN}/api/prescriptions/${prescriptionId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (response.ok) {
      return await response.json();
    }

    throw new Error(response.error.message);
  } catch (error) {
    throw new Error(error.message);
  }
};
