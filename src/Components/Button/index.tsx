import * as S from './styled'

export type Props = {
  type: 'button' | 'submit' | 'link'
  title: string
  onClick?: () => void
  children: JSX.Element
  variant?: 'primary' | 'secondary'
  disabled?: boolean
  to?: string
}

const Button = ({
  children,
  title,
  type,
  disabled,
  onClick,
  to,
  variant = 'primary'
}: Props) => {
  if (type === 'submit' || type === 'button') {
    return (
      <S.ButtonContainer
        title={title}
        type={type}
        onClick={onClick}
        disabled={disabled}
        variant={variant}
      >
        {children}
      </S.ButtonContainer>
    )
  }

  return (
    <S.ButtonLink title={title} variant={variant} to={to}>
      {children}
    </S.ButtonLink>
  )
}

export default Button
