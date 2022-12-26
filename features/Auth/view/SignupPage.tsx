import Layout from '@/components/Layout'
import useEnv from '@/hooks/useEnv'
import SignupForm, { SignupFormProps } from '../components/SignupForm'
import useAuthService from '../service/useAuthService'

export default function SignupPage() {
  const { titleId } = useEnv()
  const { registerPlayFabUser } = useAuthService()

  const handleFormSubmit: SignupFormProps['onSubmitForm'] = async (
    formData,
    setIsSubmitting,
  ) => {
    try {
      const { data } = await registerPlayFabUser({
        ...formData,
        Username: formData.DisplayName,
        titleId,
      })

      if (data.SessionTicket) {
        localStorage.setItem('SessionTicket', data.SessionTicket)
      }

      /**
       * TODO: redirect to the home page
       */
    } catch (error) {
      // TODO: handle error
      console.log(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Layout>
      <SignupForm onSubmitForm={handleFormSubmit} />
    </Layout>
  )
}