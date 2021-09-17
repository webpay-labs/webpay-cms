import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { SendMoney } from "../components/SendMoney";

export const Homepage = () => {

    return (
        <div>
            <Header />
            <Hero />
            <SendMoney />
            <Footer />
        </div>
    )
}