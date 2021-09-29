import DashboardImg from '../../assets/Dashboard.png';
import SolanaLogo from '../../assets/solana-sol-logo.svg';

export const Hero = () => {
  return (
    <div className="relative bg-black overflow-hidden">
      <div className="relative h-full max-w-7xl mx-auto p-8 md:p-16">
        <main className="mx-auto max-w-4xl">
          <div className="text-center">
            <h1 className="text-3xl lg:text-6xl font-bold text-white sm:text-5xl md:text-6xl md:leading-tight">
              <span className="block xl:inline">
                Accept payments in SOL, USDC, or USDT
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-2xl">
              Webpay lets you create unique and private payment links so you can
              receive payments from your audience without revealing your wallet
              address
            </p>

            <div className="flex items-center justify-center space-x-2 mt-8">
              <img
                className="lg:h-8 w-auto sm:h-4"
                src={SolanaLogo}
                alt="Solana logo"
              />
              <p className="text-base text-white">Supports SPL Tokens</p>
            </div>
          </div>

          <img className="mt-10" src={DashboardImg} alt="Webpay dashboard" />
        </main>
      </div>
    </div>
  );
};
