import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { RecoilRoot } from 'recoil'
import App from './App'
import "./assets/styles/main.css"
import customTheme from "./theme/index";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <ChakraProvider theme={customTheme}>
        <App />
      </ChakraProvider>
    </RecoilRoot>
  </React.StrictMode>,
)
