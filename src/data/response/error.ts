export interface ErrorReason {
  identifier: string
  description: string
  code: number
  metadata: {
    message: string
  }
}

export interface ErrorResponseDTO {
  statusCode: number
  message: string
  reason: ErrorReason
}
