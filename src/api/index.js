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

export const getRoutinesAPI = async () => {
  try {
    const response = await fetch(`${BASE_URL}/routines`, {
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

export const AddActivitiesAPI = async (token, name, description) => {
  try {
    const response = await fetch(`${BASE_URL}/activities`, {
      method: "POST",
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

export const getMyRoutinesAPI = async (token, username)=>{
  try {
    const response = await fetch(`${BASE_URL}/users/${username}/routines`,{
      method: "GET",
      headers: makeHeaders(token),
    });
    const result = await response.json();
    console.log(makeHeaders(token), "from my routines api call")
    return result
  } catch (error) {
    console.error(error)
  }
}

export const AddRoutinesAPI = async (token, name, goal) => {
  try {
    const response = await fetch(`${BASE_URL}/routines`, {
      method: "POST",
      headers: makeHeaders(token),
      body: JSON.stringify({
        name: name,
        goal: goal,
      }),
    });
    console.log(response);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }

}

export const deleteRoutineAPI = async (token, id) => {
  try {
    const response = await fetch(`${BASE_URL}/routines/${id}`, {
      method: "DELETE",
      headers: makeHeaders(token),
      
    });
    console.log(response);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }

}

export const editRoutineAPI = async (token, id, name, goal, isPublic) => {
  try {
    const response = await fetch(`${BASE_URL}/routines/${id}`, {
      method: "PATCH",
      headers: makeHeaders(token),
      body: JSON.stringify({
        name: name,
        goal: goal,
        isPublic: isPublic
      }),
    });
    console.log(response);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const addActivityToRoutineAPI = async (token,routineId, activityId, count, duration) => {
  try {
    const response = await fetch(`${BASE_URL}/routines/${routineId}/activities`, {
      method: "POST",
      headers: makeHeaders(token),
      body: JSON.stringify({
        activityId: activityId,
        count: count,
        duration: duration
      }),
    });
    console.log(response);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const deleteRoutineActivityAPI = async (token, routineActivityId) => {
  try {
    const response = await fetch(`${BASE_URL}/routine_activities/${routineActivityId}`, {
      method: "DELETE",
      headers: makeHeaders(token),
      
    });
    console.log(response);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};


export const editRoutineActivityAPI = async (token, routineActivityId, duration, count) => {
  try {
    const response = await fetch(`${BASE_URL}/routine_activities/${routineActivityId}`, {
      method: "PATCH",
      headers: makeHeaders(token),
      body: JSON.stringify( {
        duration: duration,
        count: count,
      })
      
    });
    console.log(response);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};