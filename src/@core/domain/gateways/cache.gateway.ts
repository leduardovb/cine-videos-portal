export interface CacheGateway {
  get(key: string): Promise<string | null>
  set(
    ...args:
      | [key: string, value: any, config?: any]
      | [Array<{ key: string; value: any; config?: any }>]
  ): Promise<void>
  remove(key: string): void
  clear(): void
}
