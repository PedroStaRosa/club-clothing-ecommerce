import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import validator from 'validator'

// Components
import CustomButton from '../../components/custom-button/custom-buttom.component'
import CustomInput from '../../components/custom-input/custom-input.component'
import Header from '../../components/header/header.components'
import InputErrorMessage from '../../components/input-error-message/input-error-message.component'

// Styles
import {
  LoginContainer,
  LoginHeadline,
  LoginInputContainer,
  LoginSubtitle,
  LoginContent
} from './login.styles'

interface LoginForm {
  email: string
  password: string
}

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginForm>()

  const handleLoginPress = (data: any) => {
    console.log({ data })
  }

  return (
    <>
      <Header />
      <LoginContainer>
        <LoginContent>
          <LoginHeadline>Entre com a sua conta</LoginHeadline>
          <CustomButton startIcon={<BsGoogle size={18} />}>
            Entrar com o google
          </CustomButton>
          <LoginSubtitle>ou entre com o seu email</LoginSubtitle>
          <LoginInputContainer>
            <p>E-mail</p>
            <CustomInput
              hasError={!!errors.email}
              placeholder="Digite seu email"
              {...register('email', {
                required: true,
                validate: (value) => {
                  return validator.isEmail(value)
                }
              })}
            />

            {errors?.email?.type === 'required' && (
              <InputErrorMessage>O email é obrigatória</InputErrorMessage>
            )}
            {errors?.email?.type === 'validate' && (
              <InputErrorMessage>
                Por favor, insira um email válido
              </InputErrorMessage>
            )}
          </LoginInputContainer>
          <LoginInputContainer>
            <p>Senha</p>
            <CustomInput
              type="password"
              hasError={!!errors.password}
              placeholder="Digite sua senha"
              {...register('password', { required: true })}
            />
            {errors?.password?.type === 'required' && (
              <InputErrorMessage>A senha é obrigatória</InputErrorMessage>
            )}
          </LoginInputContainer>
          <CustomButton
            startIcon={<FiLogIn size={18} />}
            onClick={() => {
              handleSubmit(handleLoginPress)()
            }}>
            Entrar
          </CustomButton>
        </LoginContent>
      </LoginContainer>
    </>
  )
}

export default LoginPage
