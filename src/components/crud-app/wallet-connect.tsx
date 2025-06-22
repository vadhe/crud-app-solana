
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Wallet, Check } from 'lucide-react';
// import { useToast } from '@/hooks/use-toast';

export const WalletConnect = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string>('');
  // const { toast } = useToast();

  const disconnectWallet = () => {
    setIsConnected(false);
    setWalletAddress('');
    // toast({
    //   title: "Wallet Disconnected",
    //   description: "Your wallet has been disconnected.",
    // });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 border border-amber-100">
      {!isConnected ? (
        <Button 
          className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 w-full"
        >
          <Wallet className="w-5 h-5" />
          Connect Phantom Wallet
        </Button>
      ) : (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 text-green-600">
              <Check className="w-5 h-5" />
              <span className="font-semibold">Connected</span>
            </div>
            <span className="text-sm text-gray-600">
              {walletAddress.slice(0, 8)}...{walletAddress.slice(-8)}
            </span>
          </div>
          <Button 
            onClick={disconnectWallet}
            variant="outline"
            size="sm"
            className="text-red-600 border-red-200 hover:bg-red-50"
          >
            Disconnect
          </Button>
        </div>
      )}
    </div>
  );
};