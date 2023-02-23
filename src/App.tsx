import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ThemeProvider from './contexts/ThemeContext'
import DefaultLayout from './layouts/DefaultLayout'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'


function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Projects />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
