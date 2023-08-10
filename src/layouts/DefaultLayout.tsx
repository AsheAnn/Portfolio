import { lazy } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
const IntroAnimaton = lazy(() => import('@/components/IntroAnimaton'))
const Background = lazy(() => import('./Background'))

const DefaultLayout = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  return (
    <div className="relative w-full h-full min-h-screen bg-gray-50 transition-colors duration-300 ease-linear dark:text-gray-200 text-theme-100 dark:bg-theme-100">
      <IntroAnimaton />
      <Background />
      <div className="relative w-full h-full z-[1]">
        <div className="absolute w-full h-full md:p-14 p-7">
          <Outlet />
        </div>
        <div className="absolute w-full h-full md:p-14 p-7">
          <Navbar />
        </div>
      </div>
    </div>
  )
}

export default DefaultLayout
