import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import ThemeProvider from './contexts/ThemeContext'
import DefaultLayout from './layouts/DefaultLayout'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import LoadingProvider from './contexts/LoadingContext'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <LoadingProvider>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/works" element={<Projects />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </LoadingProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
