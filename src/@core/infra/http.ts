import { ErrorResponseDTO } from '@/data/response/error'
import { ResponseDTO } from '@/data/response/response'
import { getCookie, removeCookie } from '@/utils/Actions'
import axios, { AxiosError, AxiosResponse } from 'axios'
import qs from 'qs'

const TOKEN_PREFIX = 'Bearer'
const AUTHENTICATED_ROUTES_PREFIX = ['/me', '/users', '/logout']

const isResponseDTO = (data: unknown): data is ResponseDTO => {
  return (
    typeof data === 'object' &&
    data !== null &&
    'data' in data &&
    'message' in data &&
    'statusCode' in data
  )
}

const isErrorResponseDTO = (data: unknown): data is ErrorResponseDTO => {
  return (
    typeof data === 'object' &&
    data !== null &&
    'statusCode' in data &&
    'message' in data &&
    'reason' in data &&
    typeof data.reason === 'object' &&
    data.reason !== null &&
    'identifier' in data.reason &&
    'description' in data.reason &&
    'code' in data.reason &&
    'metadata' in data.reason &&
    typeof data.reason.metadata === 'object' &&
    data.reason.metadata !== null &&
    'message' in data.reason.metadata
  )
}

const onResponse = async (response: AxiosResponse) => {
  if (isResponseDTO(response.data)) response.data = response.data.data
  return response
}

const onError = async (error: AxiosError) => {
  if (error.response?.data && isErrorResponseDTO(error.response.data)) {
    return Promise.reject(error.response.data.reason)
  }
  return Promise.reject(error)
}

export const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' }),
})

http.interceptors.response.use(onResponse, onError)

http.interceptors.request.use(async (config) => {
  const isAuthRoute = AUTHENTICATED_ROUTES_PREFIX.some((route) => {
    return config.url?.match(route) !== null
  })

  if (isAuthRoute) {
    const token = await getCookie(process.env.NEXT_PUBLIC_TOKEN_KEY as string)
    if (!token) {
      await removeCookie(process.env.NEXT_PUBLIC_TOKEN_KEY as string)
      return config
    }
    config.headers.Authorization = `${TOKEN_PREFIX} ${token.value}`
  }
  return config
})
