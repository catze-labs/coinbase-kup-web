import useEnv from '@/hooks/useEnv'
import Requester from '@/utils/requester'
import { useState } from 'react'

/**
 * Hook for Authentication with API call
 * @example login, logout, refresh token, validate token, ...
 */
export default function useAuthService() {
    const loginWithEmailAddress = async (payload: Auth.Login.Payload) => {
        const { data, status } = await Requester.post<Auth.Login.Result>(
          '/Client/LoginWithEmailAddress',
          payload,
        )
        return data
      }
    return { loginWithEmailAddress }
}    