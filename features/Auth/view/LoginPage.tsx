import Layout from '@/components/Layout'
import LoginForm, { LoginFormProps } from '@/features/Auth/components/LoginForm'
import useEnv from '@/hooks/useEnv'
import useAuthService from '../service/useAuthService'

export default function LoginPage() {
  // get the login function from the auth service
  const { loginWithEmailAddress } = useAuthService()
  const { titleId } = useEnv()
  const handleFormSubmit: LoginFormProps['onSubmitForm'] = async (
    formData,
    setIsSubmitting,
  ) => {
    try {
      const { data } = await loginWithEmailAddress({ ...formData, titleId })

      /**
       * save the auth token in the local storage
       */
      localStorage.setItem('SessionTicket', data.SessionTicket)

      /**
       * TODO: redirect to the home page
       */
    } catch (error) {
      console.log(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Layout>
        <LoginForm onSubmitForm={handleFormSubmit} />
    </Layout>
  )
}