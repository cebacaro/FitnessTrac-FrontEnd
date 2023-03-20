const BASE_URL = "https://ap-cb-fitnesstrackerbackend.onrender.com/api";

function makeHeaders(token) {
  return {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`,
  };
}

export const logInAPI = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const registerAPI = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const getActivitiesAPI = async () => {
  try {
    const response = await fetch(`${BASE_URL}/activities`, {
      method: "GET",
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const editActivitiesAPI = async (token, id, name, description) => {
  try {
    const response = await fetch(`${BASE_URL}/activities/${id}`, {
      method: "PATCH",
      headers: makeHeaders(token),
      body: JSON.stringify({
        name: name,
        description: description,
      }),
    });
    console.log(response);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
