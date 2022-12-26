import Box from '@/components/Box'
import Button from '@/components/Button'
import Label from '@/components/Label'
import TextInput from '@/components/TextInput'
import { yupResolver } from '@hookform/resolvers/yup'
import { ComponentProps, Dispatch, SetStateAction, useState } from 'react'
import { useForm } from 'react-hook-form'
import signupSchema from '../utils/signupFormSchema'

export interface SignupFormProps extends ComponentProps<'div'> {
  onSubmitForm: (
    formData: Auth.Signup.FormData,
    setIsSubmitting: Dispatch<SetStateAction<boolean>>,
  ) => void
}

const SignupForm: React.FC<SignupFormProps> = ({ onSubmitForm }) => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const { register, handleSubmit } = useForm<Auth.Signup.FormData>({
    resolver: yupResolver(signupSchema),
  })

  const onSubmit = handleSubmit((data) => {
    setIsSubmitting(true)
    onSubmitForm(data, setIsSubmitting)
  })

  return (
    <Box hasBorder hasPadding>
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

        <Button type="submit">Submit</Button>
      </form>
    </Box>
  )
}
export default SignupForm