import axios, { AxiosResponse } from 'axios';

const Http = axios.create();

export class Service {
  protected static Http = Http;
  protected static getData = getData;
}

function getData<T>(response: AxiosResponse<T>) {
  return response.data;
}

Http.defaults.baseURL =
  import.meta.env.VITE_BACKEND_URL ??
  'http://localhost:8080';
