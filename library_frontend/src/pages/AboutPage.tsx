import Header from "../components/common/Header";
import AboutHero from "../components/About/AboutHero";
import Section from "../components/common/Section";
import AboutSection from "../components/About/AboutSection";
import WhatWeDo from "../components/About/WhatWeDo";
import Footer from "../components/common/Footer";



function AboutPage() {
    return ( 
        <>
             <Header/>
            <AboutHero/>
            <Section>
                <AboutSection/>
            </Section>
            <Section>
                <WhatWeDo/>
            </Section>
            <Footer/>
        </>
     );
}

export default AboutPage;