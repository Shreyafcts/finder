import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Vacationspot from "./components/Vacationspot";
import OffersList from "./components/OffersList";
import Restaurant from "./components/Restaurant ";
import ActivityCards from "./components/ActivityCards";
import Cta from "./components/Cta";
import BestOfCity from "./components/BestOfCity";
import Events from "./components/Events";

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Vacationspot maxPost={3} />
            <ActivityCards maxPost={4} />
            <OffersList maxPost={3} />
            <Restaurant maxPost={9} />
            <BestOfCity />
            <Events />
            <Cta />
            <Footer />
        </>
    )
}
export default Home;