import useEnv from '@/hooks/useEnv'
import Requester from '@/utils/requester'
import { useState } from 'react'

/**
 * Hook for Authentication with API call
 * @example login, logout, refresh token, validate token, ...
 */
export default function useAuthService() {
  /**
   * login with email and password
   */
  const loginWithEmailAddress = async (payload: Auth.Login.Payload) => {
    const { data } = await Requester.post<Auth.Login.Result>(
      '/Client/LoginWithEmailAddress',
      payload,
    )
    return data
  }

  /**
   * register
   */
  const registerPlayFabUser = async (payload: Auth.Signup.Payload) => {
    const { data } = await Requester.post<Auth.Signup.Result>(
      '/Client/RegisterPlayFabUser',
      payload,
    )
    return data
  }

  return { loginWithEmailAddress, registerPlayFabUser }
}    