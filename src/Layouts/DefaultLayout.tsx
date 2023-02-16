import { Outlet } from 'react-router-dom'
import Header from './Header'

const DefaultLayout = () => {
  return (
    <div className="relative w-full h-screen bg-gray-50 transition-colors duration-300 ease-linear dark:text-gray-50 text-theme-100 dark:bg-theme-100">
      <Header />
      <div className="pt-20 w-full h-full">
        <Outlet />
      </div>
    </div>
  )
}

export default DefaultLayout
