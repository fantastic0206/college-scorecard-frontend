import axios from 'axios';
import { token } from './auth';

const backendUrl = process.env.NEXT_BACKEND_URL || "http://localhost:8088";

const baseUrl = `${backendUrl}/api/users`;

const setConfig = () => {
  return {
    headers: { 'x-auth-token': token },
  };
};

const getUser = async (username, limit, page) => {
  const response = await axios.get(
    `${baseUrl}/${username}/?limit=${limit}&page=${page}`
  );
  return response.data;
};

const uploadAvatar = async (avatarObj) => {
  const response = await axios.post(
    `${baseUrl}/avatar`,
    avatarObj,
    setConfig()
  );
  return response.data;
};

const removeAvatar = async () => {
  const response = await axios.delete(`${baseUrl}/avatar`, setConfig());
  return response.data;
};

const userService = { getUser, uploadAvatar, removeAvatar };

export default userService;
