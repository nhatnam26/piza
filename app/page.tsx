import {WalletConnect} from "@/components/Wallet-connect"
import SampleIntegration from "@/components/sample"
import FlashSale from "@/components/FlashSale"

export default function Home() {
  return (
    <div className="p-6 space-y-6">
      <WalletConnect />

      {/* DApp Flash Sale */}
      <FlashSale />

      {/* Demo cũ vẫn giữ */}
      <SampleIntegration />
    </div>
  );
}
