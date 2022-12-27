import Button from '@/components/Button'
import Label from '@/components/Label'
import TextInput from '@/components/TextInput'
import useEnv from '@/hooks/useEnv'
import useModalStore from '@/store/useModalStore'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import useAuthService from '../service/useAuthService'
import signupSchema from '../utils/signupFormSchema'
import LoginForm from './LoginForm'

const SignupForm: React.FC = () => {
  const { openModal } = useModalStore()
  const { titleId } = useEnv()
  const { registerPlayFabUser } = useAuthService()

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const { register, handleSubmit } = useForm<Auth.Signup.FormData>({
    resolver: yupResolver(signupSchema),
  })

  const handleClickSignin = () => {
    openModal({
      title: 'Sign In',
      component: <LoginForm />,
    })
  }

  const onSubmit = handleSubmit(async (formData) => {
    setIsSubmitting(true)
    try {
      const { data } = await registerPlayFabUser({
        ...formData,
        Username: formData.DisplayName,
        titleId,
      })

      if (data.SessionTicket) {
        localStorage.setItem('SessionTicket', data.SessionTicket)
      }

      handleClickSignin()
    } catch (error) {
      console.log(error)
    } finally {
      setIsSubmitting(false)
    }
  })

  return (
    <form className="flex flex-col gap-6" onSubmit={onSubmit}>
      <div className="flex flex-col gap-1">
        <Label htmlFor="email">Email</Label>
        <TextInput type="email" id="email" {...register('Email')} />
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="password">Password</Label>
        <TextInput type="password" id="password" {...register('Password')} />
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="name">Name</Label>
        <TextInput type="text" id="name" {...register('DisplayName')} />
      </div>
      <div className="flex flex-col gap-2">
        <Button type="submit" loading={isSubmitting}>
          Submit
        </Button>
        <Button
          type="button"
          variant="ghost"
          onClick={handleClickSignin}
          loading={isSubmitting}
        >
          Sign in
        </Button>
      </div>
    </form>
  )
}
export default SignupForm