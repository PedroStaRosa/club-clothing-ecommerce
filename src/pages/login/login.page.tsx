import Header from '../../components/header/header.components'
import {
  LoginContainer,
  LoginHeadline,
  LoginInputContainer,
  LoginSubtitle,
  LoginContent
} from './login.styles'

const LoginPage = () => {
  return (
    <>
      <Header />
      <LoginContainer>
        <LoginContent>
          <LoginHeadline>Entre com a sua conta</LoginHeadline>
          {/* Button */}
          <LoginSubtitle>ou entre com o seu email</LoginSubtitle>
          <LoginInputContainer>{/* Email Input */}</LoginInputContainer>
          <LoginInputContainer>{/* password Input */}</LoginInputContainer>
        </LoginContent>
      </LoginContainer>
    </>
  )
}

export default LoginPage
