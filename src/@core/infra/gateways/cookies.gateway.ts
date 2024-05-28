import { CacheGateway } from '@/@core/domain/gateways'
import {
  getCookie,
  setCookie,
  removeCookie,
  clearCookies,
} from '@/utils/Actions'

export class CookiesGateway implements CacheGateway {
  async get(key: string) {
    const cookie = await getCookie(key)
    return cookie?.value || null
  }

  async set(
    ...args:
      | [key: string, value: any, config?: any]
      | [Array<{ key: string; value: any; config?: any }>]
  ) {
    const isArray = Array.isArray(args[0])
    if (isArray) {
      const cookies = args[0] as Array<{
        key: string
        value: any
        config?: any
      }>

      for (const cookie of cookies) {
        await setCookie(cookie.key, cookie.value, cookie.config)
      }

      return
    } else {
      const [key, value, config] = args as [string, string, any]
      setCookie(key, value, config)
    }
  }

  remove(key: string): void {
    removeCookie(key)
  }

  clear(): void {
    clearCookies()
  }
}
