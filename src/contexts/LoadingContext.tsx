import { createContext, useState } from 'react'

type LoadingContextData = {
  isMounted: boolean
  setIsMounted: React.Dispatch<React.SetStateAction<boolean>>
}

export const LoadingContext = createContext<LoadingContextData>(
  {} as LoadingContextData
)

const LoadingProvider: React.FC<React.PropsWithChildren> = ({
  children
}) => {
  const [isMounted, setIsMounted] = useState(true)

  return (
    <LoadingContext.Provider value={{ isMounted, setIsMounted }}>
      {children}
    </LoadingContext.Provider>
  )
}

export default LoadingProvider
