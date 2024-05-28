import { HttpGateway } from '@/@core/domain/gateways/http.gateway'
import { HttpRequest } from '@/data/protocols/http/http-client'
import { AxiosInstance } from 'axios'

export class AxiosHttpGateway implements HttpGateway {
  private baseUrl = process.env.NEXT_PUBLIC_API_URL

  constructor(private readonly http: AxiosInstance) {}

  async request<T>(data: HttpRequest): Promise<T> {
    return await this.http<T>({
      url: data.url,
      method: data.method,
      data: data.body,
      headers: data.headers,
      baseURL: data.baseUrl ?? this.baseUrl,
      params: data.params,
      responseType: data.responseType,
    }).then((res) => res.data)
  }
}
