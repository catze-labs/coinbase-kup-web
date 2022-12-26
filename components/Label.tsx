import { ComponentProps } from 'react'

export interface LabelProps extends ComponentProps<'label'> {}
const Label: React.FC<LabelProps> = ({ children, ...rest }) => {
  return (
    <label className="text-sm text-gray-400 font-medium" {...rest}>
      {children}
    </label>
  )
}

export default Label