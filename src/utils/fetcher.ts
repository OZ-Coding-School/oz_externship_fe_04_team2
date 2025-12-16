export class ApiError extends Error {
  status: number
  detail?: string

  constructor(status: number, message: string, detail?: string) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.detail = detail
  }
}

export async function apiFetch<T>(
  input: RequestInfo,
  init?: RequestInit
): Promise<T> {
  const res = await fetch(input, init)

  if (!res.ok) {
    let errorBody = null

    try {
      errorBody = await res.json()
    } catch {
      // JSON 파싱 에러 무시
    }

    throw new ApiError(
      res.status,
      errorBody?.error_detail || '요청에 실패했습니다.',
      errorBody
    )
  }

  if (res.status === 204) {
    return null as T
  }

  return res.json()
}
