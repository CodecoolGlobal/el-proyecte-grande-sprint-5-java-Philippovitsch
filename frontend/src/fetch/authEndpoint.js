import {axiosInstance, url} from "./axiosInstance"

export function signUp(userData) {
  return axiosInstance.post(`${url}/api/auth/sign-up`, userData)
    .then(response => {
      return {
        status: response.status,
        userData: response.data
      };
    })
    .catch(error => {
      console.log("Error: " + error);
      if (error.code === "ERR_NETWORK") {
        return {
          status: -1,
          error: error.name,
          message: error.message
        };
      } else {
        return {
          status: error.response.status,
          error: error.response.data.error,
          message: error.response.data.message
        };
      }
    });
}

export function logIn(userData) {
  return axiosInstance.post(`${url}/api/auth/sign-in`, userData)
    .then(response => {
      localStorage.setItem("user", JSON.stringify(response.data));
      return {
        status: response.status,
        userData: response.data
      };
    })
    .catch(error =>  {
      console.log("Error: " + error);
      if (error.code === "ERR_NETWORK") {
        return {
          status: -1,
          error: error.name,
          message: error.message
        };
      } else {
        return {
          status: error.response.status,
          error: error.response.data.error,
          message: error.response.data.message
        };
      }
    });
}

export function logOut() {
  return axiosInstance.post(`${url}/api/auth/sign-out`)
    .then(response => {
      localStorage.removeItem("user");
      return {
        status: response.status,
        message: response.data.message
      };
    })
    .catch(error => {
      console.log("Error: " + error);
      if (error.code === "ERR_NETWORK") {
        return {
          status: -1,
          error: error.name,
          message: error.message
        };
      } else {
        return {
          status: error.response.status,
          error: error.response.data.error,
          message: error.response.data.message
        };
      }
    });
}
