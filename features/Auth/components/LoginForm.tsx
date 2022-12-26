import { ComponentProps, Dispatch, SetStateAction, useState } from 'react'
  import { useForm } from 'react-hook-form'
  import { yupResolver } from '@hookform/resolvers/yup'
  import loginSchema from '@/features/Auth/utils/loginFormSchema'
  import TextInput from '@/components/TextInput'
import Label from '@/components/Label'
import Button from '@/components/Button'
import Box from '@/components/Box'

  export interface LoginFormProps extends ComponentProps<'div'> {
    onSubmitForm: (
      formData: Auth.Login.FormData,
      setIsSubmitting: Dispatch<SetStateAction<boolean>>,
    ) => void
  }
  
  const LoginForm: React.FC<LoginFormProps> = ({ onSubmitForm }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { register, handleSubmit } = useForm<Auth.Login.FormData>({
      resolver: yupResolver(loginSchema),
    })

    const onSubmit = handleSubmit((data) => {
      setIsSubmitting(true)
      onSubmitForm(data, setIsSubmitting)
    })

    return (
      <Box hasPadding>
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

            <Button variant="ghost" type="button" disabled>
              Sign-up
            </Button>
          </div>
        </form>
      </Box>
  )
}
export default LoginForm