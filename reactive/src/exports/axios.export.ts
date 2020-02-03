interface AxiosParam {
  baseURL: string
}

interface AxiosHeaders {
  Authorization: string;
  ContentType?: string;
}

export interface AxiosResponse {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request: any;
}

export interface AxiosError {
  response: any;
}

interface AxiosFinally {
  finally: (promise: () => void) => void;
}

interface AxiosCatch {
  catch: (promise: (error: AxiosError) => void) => AxiosFinally;
}

interface AxiosThen {
  then: (promise: (response: AxiosResponse) => void) => AxiosCatch;
}

interface AxiosMethod {
  get: (url: string, headers?: { headers: AxiosHeaders }) => AxiosThen;
  post: (url: string, params?: any, headers?: { headers: AxiosHeaders }) => AxiosThen;
  put: (url: string, params?: any, headers?: { headers: AxiosHeaders }) => AxiosThen;
  delete: (url: string, headers?: { headers: AxiosHeaders }) => AxiosThen;
}

export const axios: {
  create: (params: AxiosParam) => AxiosMethod
} = require('axios').default;