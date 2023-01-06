import { FunctionComponent } from 'react'

// Components
import Header from './components/header/header.components'

interface AppProps {
  message?: string
}
const App: FunctionComponent<AppProps> = ({ message }) => {
  return (
    <>
      <Header />
      <h1>Hello World!</h1>
    </>
  )
}

export default App
