import './App.css';
import NavBar from "./components/navbar/navbar";
import SectionHero from "./components/herosection/herosection";
import MoneySection from "./components/moneysection/moneysection"
import SectionProcess from "./components/sectionprocess/sectionprocess"
import SectionPrice from "./components/sectionprice/sectionprice"
import Faq from "./components/faq/faq"
import Footer from "./components/footer/footer";

const App = () => {
  return(
    <>
    <NavBar />
    <SectionHero />
    <MoneySection />
    <SectionProcess />
    <SectionPrice />
    <Faq />
    <Footer />
    </>
  )
};

export default App;