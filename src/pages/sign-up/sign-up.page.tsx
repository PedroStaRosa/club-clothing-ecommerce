import CustomButton from '../../components/custom-button/custom-buttom.component'
import CustomInput from '../../components/custom-input/custom-input.component'
import Header from '../../components/header/header.components'
import {
  SignUpContainer,
  SignUpContent,
  SignUpHeadline,
  SignUpInputContainer
} from './sign-up.styles'
import { FiLogIn } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import validator from 'validator'
import InputErrorMessage from '../../components/input-error-message/input-error-message.component'
import { useState } from 'react'

interface SignUpForm {
  name: string
  lastName: string
  email: string
  password: string
  passwordConfirmation: string
}

const SignUpPage = () => {
  const [confirmPassword, setConfirmPassword] = useState(true)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<SignUpForm>()

  const watchPassword = watch('password')

  const handleRegisterClick = (data: any) => {
    console.log({ data })
    if (data.password !== data.confirmPassword) {
      setConfirmPassword(false)
      console.log(data.password)
      console.log('entrou')
    } else {
      setConfirmPassword(true)
    }
  }

  return (
    <>
      <Header />
      <SignUpContainer>
        <SignUpContent>
          <SignUpHeadline>Crie sua conta</SignUpHeadline>
          <SignUpInputContainer>
            <p>Nome</p>
            <CustomInput
              hasError={!!errors.name}
              placeholder="Digite seu nome"
              {...register('name', {
                required: true
              })}
            />
            {errors?.name?.type === 'required' && (
              <InputErrorMessage>O nome é obrigatória</InputErrorMessage>
            )}
          </SignUpInputContainer>
          <SignUpInputContainer>
            <p>Sobrenome</p>
            <CustomInput
              hasError={!!errors.lastName}
              placeholder="Digite seu sobrenome"
              {...register('lastName', {
                required: true
              })}
            />
            {errors?.lastName?.type === 'required' && (
              <InputErrorMessage>O sobrenome é obrigatória</InputErrorMessage>
            )}
          </SignUpInputContainer>
          <SignUpInputContainer>
            <p>E-mail</p>
            <CustomInput
              hasError={!!errors?.email}
              placeholder="Digite seu e-mail"
              {...register('email', {
                required: true,
                validate: (value) => {
                  return validator.isEmail(value)
                }
              })}
            />
            {errors?.email?.type === 'required' && (
              <InputErrorMessage>O email é obrigatório</InputErrorMessage>
            )}
            {errors?.email?.type === 'validate' && (
              <InputErrorMessage>
                Por favor, insira um email válido
              </InputErrorMessage>
            )}
          </SignUpInputContainer>
          <SignUpInputContainer>
            <p>Senha</p>
            <CustomInput
              type="password"
              hasError={!!errors.password || !confirmPassword}
              placeholder="Digite seu senha"
              {...register('password', {
                required: true
              })}
            />
            {errors?.password?.type === 'required' && (
              <InputErrorMessage>A senha é obrigatória</InputErrorMessage>
            )}
          </SignUpInputContainer>
          <SignUpInputContainer>
            <p>Corfimar senha</p>
            <CustomInput
              type="password"
              hasError={!!errors.passwordConfirmation || !confirmPassword}
              placeholder="Confirme sua senha"
              {...register('passwordConfirmation', {
                required: true,
                validate: (value) => {
                  return value === watchPassword
                }
              })}
            />
            {errors?.passwordConfirmation?.type === 'required' && (
              <InputErrorMessage>A senha é obrigatória</InputErrorMessage>
            )}
            {errors?.passwordConfirmation?.type === 'validate' && (
              <InputErrorMessage>
                A confirmação de senha deve ser igual a senha{' '}
              </InputErrorMessage>
            )}
          </SignUpInputContainer>
          <CustomButton
            startIcon={<FiLogIn size={18} />}
            onClick={() => {
              handleSubmit(handleRegisterClick)()
            }}>
            Criar Conta
          </CustomButton>
        </SignUpContent>
      </SignUpContainer>
    </>
  )
}

export default SignUpPage
