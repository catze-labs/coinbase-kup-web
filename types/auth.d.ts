import { LoginFormData } from '@/features/Auth/utils/loginFormSchema'

/**
 * The response of the login request
 * @see https://learn.microsoft.com/en-us/rest/api/playfab/client/authentication/login-with-email-address?view=playfab-rest
 */
type LoginResult = PlayFab.Response<{
  SessionTicket: string
  PlayFabID: string
  NewlyCreated: boolean
  SettingsForUser: {
    NeedsAttribution: boolean
    GatherDeviceInfo: boolean
    GatherFocusInfo: boolean
  }
  LastLoginTime: Date
  EntityToken: {
    EntityToken: string
    TokenExpiration: Date
    Entity: {
      Id: string
      Type: string
      TypeString: string
    }
  }
  treatmentAssignment: unknown[]
}>

declare global {
    declare namespace Auth {
      namespace Login {
        /**
         * Form data for login
         */
        type FormData = LoginFormData
        /**
         * Payload for loginWithEmailAddress
         */
        type Payload = LoginFormData & { titleId: string }
        /**
         * Response of loginWithEmailAddress
         */
        type Result = LoginResult
      }
    }
}