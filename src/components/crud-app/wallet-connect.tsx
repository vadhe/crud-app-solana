import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import { useWallet } from '@solana/wallet-adapter-react'
import { WalletList } from '@/components/crud-app/wallet-list'

export const WalletConnect = () => {
  const { disconnect, connected, publicKey } = useWallet()

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 border border-amber-100">
      {!connected ? (
        <WalletList />
      ) : (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 text-green-600">
              <Check className="w-5 h-5" />
              <span className="font-semibold">Connected</span>
            </div>
            <span className="text-sm text-gray-600">{publicKey?.toString()}</span>
          </div>
          <Button
            onClick={disconnect}
            variant="outline"
            size="sm"
            className="text-red-600 border-red-200 hover:bg-red-50"
          >
            Disconnect
          </Button>
        </div>
      )}
    </div>
  )
}
