import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { UseCase } from '../components/UseCase';
import { MerchantSection } from '../components/MerchantSection';

export const Homepage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <UseCase />
      <MerchantSection />
      <Footer />
    </div>
  );
};
