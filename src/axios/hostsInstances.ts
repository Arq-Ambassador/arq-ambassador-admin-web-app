import axios, { AxiosInstance } from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";

const HOST_URL = 'http://www.ambassadors.ink';
export const CHECKOUT_WEB_APP_URL = 'http://checkout.ambassadors.ink';

const authService = axios.create({
  baseURL: `${HOST_URL}/auth/api/admin`,
  withCredentials: true
});

const registrationExperienceService = axios.create({
  baseURL: `${HOST_URL}/registration-exp/api/admins`,
  withCredentials: true
});

const usersService = axios.create({
  baseURL: `${HOST_URL}/users/api/admin`,
  withCredentials: true
});
setJWTToken(usersService);

const coreService = axios.create({
  baseURL: `${HOST_URL}/core/api/admin`,
  withCredentials: true
});
setJWTToken(coreService);

export {
  authService,
  registrationExperienceService,
  usersService,
  coreService
};

function setJWTToken(axiosInstance: AxiosInstance) {
  axiosInstance.interceptors.request.use((config) => {
    const token = sessionStorage.getItem('jwt');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });
}
