import axios from "axios";

// url could come from an environment variable
const url = "http://localhost:8080/api/auth/"
const axiosInstance = axios.create({
  withCredentials: true
});

export async function signUp(userData) {
  try {
    const response = await axiosInstance.post(url + "sign-up", userData);
    return {
			status: response.status,
			userData: response.data
    };
  } catch (error) {
		return {
			status: error.response.status,
			error: error.response.data.error,
			message: error.response.data.message
		}
	}
}

export async function logIn(userData) {
  try{
    const response = await axiosInstance.post(url + "sign-in", userData);
    localStorage.setItem("user", JSON.stringify(response.data));
    return {
      status: response.status,
      userData: response.data
    };
  } catch (error) {
    return {
      status: error.response.status,
      error: error.response.data.error,
      message: error.response.data.message
    };
  }
}

export async function logOut() {
  try{
    const response = await axiosInstance.post(url + "sign-out");
    localStorage.removeItem("user");
    return {
      status: response.status,
      message: response.data.message
    };
  } catch (error) {
    return {
      status: error.status,
      error: error.response.data.error,
      message: error.response.data.message
    };
  }
}
