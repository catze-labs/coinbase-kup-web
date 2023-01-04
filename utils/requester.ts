import axios from 'axios'
import type { AxiosError, AxiosRequestConfig } from 'axios'
import { toast } from 'react-toastify'

const titleId: string = process.env.NEXT_PUBLIC_PLAYFAB_TITLEID
const Requester = axios.create({
  baseURL: `https://${titleId}.playfabapi.com`,
})

Requester.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const sessionTicket: string | null = localStorage.getItem('SessionTicket')
    if (sessionTicket && config?.headers) {
      config.headers['X-Authorization'] = sessionTicket
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

Requester.interceptors.response.use(
  (response) => {
    // console.log('📲', response)

    return response
  },
  (error) => {
    // console.log('📲❌', error)

    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<PlayFab.Error>
      return Promise.reject(axiosError.response?.data), toast(axiosError.response?.data.errorMessage);
    }

    return Promise.reject(error)
  },
)

export default Requester