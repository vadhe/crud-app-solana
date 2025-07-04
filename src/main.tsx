import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app.tsx'
import { ReactQueryProvider } from '@/provider/react-query-provider.tsx'
import { SolanaProvider } from '@/provider/solana-provider.tsx'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactQueryProvider>
      <SolanaProvider>
        <App />
        <Toaster />
      </SolanaProvider>
    </ReactQueryProvider>
  </StrictMode>,
)

declare global {
  interface BigInt {
    toJSON(): string
  }
}

BigInt.prototype.toJSON = function () {
  return this.toString()
}