import AppLayout from './components/AppLayout'
import './assets/globals.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import routes from './configs/routes'
import { App as Appd, ConfigProvider, theme } from 'antd'
import { useState } from 'react'

function App(): JSX.Element {
  const [isDark, setIsDark] = useState(false)
  const handleThemeChange = () => {
    setIsDark(!isDark)
  }
  return (
    <Appd>
      <ConfigProvider
        theme={{
          algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
          components: {
            Collapse: {
              headerPadding: '24px 16px',
              contentPadding: '24px 24px'
            }
          }
        }}
      >
        <BrowserRouter>
          <AppLayout handleThemeChange={handleThemeChange}>
            <Routes>
              {routes.map((route) => (
                <Route path={route.path} element={route.element} key={route.path} />
              ))}
            </Routes>
          </AppLayout>
        </BrowserRouter>
      </ConfigProvider>
    </Appd>
  )
}

export default App
