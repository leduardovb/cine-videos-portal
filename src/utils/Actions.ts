'use server'

import { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import { cookies } from 'next/headers'

export const getCookie = async (name: string) => {
  const cookiesStore = cookies()
  return cookiesStore.get(name)
}

export const setCookie = async (
  name: string,
  value: string,
  cookie?: Partial<ResponseCookie>
) => {
  const cookiesStore = cookies()
  cookiesStore.set(name, value, cookie)
}

export const setCookies = async (
  clientCookies: Array<{
    name: string
    value: string
    cookie?: Partial<ResponseCookie>
  }>
) => {
  const cookiesStore = cookies()

  for (const { name, value, cookie } of clientCookies) {
    cookiesStore.set(name, value, cookie)
  }
}

export const removeCookie = async (name: string) => {
  const cookiesStore = cookies()
  cookiesStore.delete(name)
}

export const clearCookies = async () => {
  const cookiesStore = cookies()
  const storageCookies = cookiesStore.getAll()

  for (const cookie of storageCookies) {
    cookiesStore.delete(cookie.name)
  }
}
