import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { FC, ReactNode } from 'react'
const queryClient = new QueryClient()

interface ReactQueryProviderProps {
  children: ReactNode
}

export const ReactQueryProvider: FC<ReactQueryProviderProps> = ({ children }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
