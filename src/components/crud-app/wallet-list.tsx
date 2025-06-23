import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
import { useWallet, type Wallet } from '@solana/wallet-adapter-react'
import { Wallet as WalletIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { WalletName } from '@solana/wallet-adapter-base'

export const WalletList = () => {
  const { wallets, select, connect } = useWallet()
  const handleSelectWallet = async (walletName: WalletName) => {
    try {
      select(walletName)
      await connect()
    } catch (err) {
      console.error('Connect failed:', err)
    }
  }
  console.log(wallets)
  return (
    <Dialog>
      <DialogTrigger className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 w-full">
        <WalletIcon className="w-5 h-5" />
        Connect Phantom Wallet
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogDescription className="flex flex-col gap-2 mt-6">
            {wallets.map((w: Wallet) => (
              <Button key={w.adapter.name} onClick={() => handleSelectWallet(w.adapter.name)}>
                <img src={w.adapter.icon} alt={`icon-${w.adapter.name}`} className='w-6 h-6'/>
                {w.adapter.name}
              </Button>
            ))}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
