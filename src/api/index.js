import { API_SERVER_URL } from "@env";

export const loginRequest = async (userData) => {
  try {
    const response = await fetch(`${API_SERVER_URL}/api/login`, {
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

    const result = await response.json();

    throw new Error(result.message);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const logoutRequest = async () => {
  try {
    const response = await fetch(`${API_SERVER_URL}/api/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (response.ok) {
      return await response.json();
    }

    const result = await response.json();

    throw new Error(result.message);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const authCheck = async () => {
  try {
    const response = await fetch(`${API_SERVER_URL}/api/auth-check`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (response.ok) {
      return await response.json();
    }

    const result = await response.json();

    throw new Error(result.message);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const requestPrescriptionList = async () => {
  try {
    const response = await fetch(`${API_SERVER_URL}/api/prescriptions`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (response.ok) {
      return await response.json();
    }

    const result = await response.json();

    throw new Error(result.message);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deletePrescription = async (prescriptionId) => {
  try {
    const response = await fetch(`${API_SERVER_URL}/api/prescriptions/${prescriptionId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (response.ok) {
      return await response.json();
    }

    const result = await response.json();

    throw new Error(result.message);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const queuePharmacy = async (userId) => {
  try {
    const response = await fetch(`${API_SERVER_URL}/api/queue`, {
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

    const result = await response.json();

    throw new Error(result.message);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getAlarmTime = async () => {
  try {
    const response = await fetch(`${API_SERVER_URL}/api/alarm-time`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (response.ok) {
      return await response.json();
    }

    const result = await response.json();

    throw new Error(result.message);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const setAlarmTime = async (alarmTime) => {
  try {
    const response = await fetch(`${API_SERVER_URL}/api/settings/alarm-time`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ alarmTime }),
    });

    if (response.ok) {
      return await response.json();
    }

    const result = await response.json();

    throw new Error(result.message);
  } catch (error) {
    throw new Error(error.message);
  }
};
