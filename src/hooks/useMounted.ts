import { useEffect, useMemo, useState } from 'react'

export const useMounted = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    return () => setIsMounted(false)
  }, [])

  const isDiffPath = useMemo(() => isMounted, [isMounted])

  return { isDiffPath }
}
