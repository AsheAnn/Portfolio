import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ThemeProvider from './contexts/ThemeContext'
import DefaultLayout from './Layouts/DefaultLayout'
import Home from './pages/Home'



function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
