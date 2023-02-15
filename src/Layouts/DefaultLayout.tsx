import { Outlet } from 'react-router-dom'
import Header from './Header'

const DefaultLayout = () => {
  return (
    <div className="relative w-full h-screen">
      <Header />
      <div className="pt-20 w-full">
        <Outlet />
      </div>
    </div>
  )
}

export default DefaultLayout
