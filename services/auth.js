import axios from 'axios';

const backendUrl = process.env.NEXT_BACKEND_URL || "http://localhost:8088";

export let token = null;

const setToken = (newToken) => {
  token = newToken;
};

const login = async (credentials) => {
  const response = await axios.post(`${backendUrl}/api/login`, credentials);
  return response.data;
};

const signup = async (enteredData) => {
  const response = await axios.post(`${backendUrl}/api/signup`, enteredData);
  return response.data;
};

const authService = { setToken, login, signup };

export default authService;
