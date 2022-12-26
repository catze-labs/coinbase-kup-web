declare namespace PlayFab {
    interface Response<T> {
      data: T
      code: number
      status: string
    }
  
    interface Error {
      code: number
      error: string
      errorCode: number
      errorMessage: string
      status: string
    }
}