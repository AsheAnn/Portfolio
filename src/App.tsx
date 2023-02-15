import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultLayout from './Layouts/DefaultLayout'
import About from './pages/About'
import Home from './pages/Home'
import Projects from './pages/Projects'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
