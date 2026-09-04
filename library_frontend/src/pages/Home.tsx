import Hero from "../components/home/Hero";
import Header from "../components/common/Header";
import Features from "../components/home/Features";
import HowItWorks from "../components/home/HowItWorks";
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
            {/* <Section>

            </Section> */}
        </>
     );
}

export default Home;
