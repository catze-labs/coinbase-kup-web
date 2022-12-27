import {
  ComponentProps,
  Dispatch,
  SetStateAction,
  useCallback,
  useState,
} from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import loginSchema from '@/features/Auth/utils/loginFormSchema'
import TextInput from '@/components/TextInput'
import Label from '@/components/Label'
import Button from '@/components/Button'
import useModalStore from '@/store/useModalStore'
import SignupForm from './SignupForm'
import useEnv from '@/hooks/useEnv'
import useAuthService from '../service/useAuthService'
import WalletConnect from '@/features/Contract/components/WalletConnect'

export interface LoginFormProps extends ComponentProps<'div'> {
  onSubmitForm?: (
    formData: Auth.Login.FormData,
    setIsSubmitting: Dispatch<SetStateAction<boolean>>,
  ) => void
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmitForm }) => {
  const { openModal } = useModalStore()
  const { titleId } = useEnv()
  const { loginWithEmailAddress } = useAuthService()

  const [isSubmitting, setIsSubmitting] = useState(false)

  const { register, handleSubmit } = useForm<Auth.Login.FormData>({
    resolver: yupResolver(loginSchema),
  })

  const onSubmit = handleSubmit(async (formData) => {
    setIsSubmitting(true)
    try {
      const { data } = await loginWithEmailAddress({ ...formData, titleId })

      /**
       * save the auth token in the local storage
       */
      localStorage.setItem('SessionTicket', data.SessionTicket)

      /**
       * go to wallet connect
       */
      openModal({
        title: 'Wallet',
        component: <WalletConnect />,
      })
    } catch (error) {
      // TODO: handle error
      console.log(error)
    } finally {
      setIsSubmitting(false)
    }
  })

  const onClickSignUp = useCallback(() => {
    openModal({
      title: 'Sign Up',
      component: <SignupForm />,
    })
  }, [])

  return (
    <form className="flex flex-col gap-6" onSubmit={onSubmit}>
      <div className="flex flex-col gap-1">
        <Label htmlFor="email">Email</Label>
        <TextInput
          autoComplete="email"
          type="email"
          id="email"
          {...register('Email')}
        />
      </div>
      <div className="flex flex-col gap-1 ">
        <Label htmlFor="password">Password</Label>
        <TextInput
          autoComplete="current-password"
          type="password"
          id="password"
          {...register('Password')}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Button variant="primary" type="submit" loading={isSubmitting}>
          Login
        </Button>

        <Button variant="ghost" type="button" onClick={onClickSignUp}>
          Sign-up
        </Button>
      </div>
    </form>
  )
}

export default LoginForm