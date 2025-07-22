import axios, { InternalAxiosRequestConfig } from "axios";
import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AppError } from "../helpers/AppError";
import { IAuthenticateResponse } from "../interfaces/https/authenticate-response";

const baseURL = Platform.select({
  ios: "http://localhost:3001",
  android: "http://192.168.15.8:3001",
});

export const dtMoneyApi = axios.create({
  baseURL,
});

dtMoneyApi.interceptors.request.use(async (config) => {
  const userData = await AsyncStorage.getItem("dt-money-user");

  if (userData) {
    const { token } = JSON.parse(userData) as IAuthenticateResponse;

    if (!config.headers) {
      config.headers = {} as InternalAxiosRequestConfig["headers"];
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

dtMoneyApi.interceptors.response.use(
  (config) => config,
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(new AppError(error.response.data.message));
    } else {
      return Promise.reject(new AppError("Falha na requisição"));
    }
  }
);
