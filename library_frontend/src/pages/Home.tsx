import Hero from "../components/home/Hero";
import Header from "../components/common/Header";
import Features from "../components/home/Features";
import HowItWorks from "../components/home/HowItWorks";
import Premium from "../components/home/Premium";
import Questions from "../components/home/Questions";
import Footer from "../components/common/Footer";
import Section from "../components/common/Section";

function Home() {
    return ( 
        <>
            <Header/>
            <Hero/>
            <Features/>
            <Section>
                <HowItWorks/>
            </Section>
            <Section>
                <Premium/>
            </Section>
            {/* <Section>
                <Questions/>
            </Section> */}
            <Footer/>
           
        </>
     );
}

export default Home;
