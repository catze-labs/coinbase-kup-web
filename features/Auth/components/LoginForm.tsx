import {
    ComponentProps,
    Dispatch,
    SetStateAction,
    useState,
  } from 'react'
  import { useForm } from 'react-hook-form'
  import { yupResolver } from '@hookform/resolvers/yup'
  import loginSchema from '@/features/Auth/utils/loginFormSchema'
  
  export interface LoginFormProps extends ComponentProps<'div'> {
    onSubmitForm: (
      formData: Auth.Login.FormData,
      setIsSubmitting: Dispatch<SetStateAction<boolean>>,
    ) => void
  }
  
  const LoginForm: React.FC<LoginFormProps> = ({ onSubmitForm }) => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { register, handleSubmit } = useForm<Auth.Login.FormData>({
      resolver: yupResolver(loginSchema),
    })
    const onSubmit = handleSubmit((data) => {
      setIsSubmitting(true)
      onSubmitForm(data, setIsSubmitting)
    })

    return (
      <form className="flex flex-col gap-6" onSubmit={onSubmit}>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm text-gray-400 font-medium">
          Email
        </label>
        <input
          autoComplete="email"
          className="border border-gray-300 rounded-sm px-2 py-1"
          type="text"
          id="email"
          {...register('Email')}
        />
      </div>
      <div className="flex flex-col gap-1 ">
      <label htmlFor="password" className="text-sm text-gray-400 font-medium">
          Password
        </label>
        <input
          autoComplete="current-password"
          className="border border-gray-300 rounded-sm px-2 py-1"
          type="password"
          id="password"
          {...register('Password')}
        />
      </div>
      <div className="flex flex-col gap-2">
      <button
          className="bg-pink-400 text-white p-1 rounded disabled:bg-pink-200"
          type="submit"
          disabled={isSubmitting}
        >
          Login
        </button>
        <button
          className="bg-white text-gray-400 p-1 rounded hover:bg-gray-100"
          type="button"
        >
          Sign-up
        </button>
      </div>
    </form>
  )
}
export default LoginForm