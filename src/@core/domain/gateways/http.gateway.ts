import { HttpRequest } from '@/data/protocols/http/http-client'

export interface HttpGateway {
  request<T>(data: HttpRequest): Promise<T>
}
