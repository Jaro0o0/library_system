import PlansHero from "../components/plans/PlansHero";
import Section from "../components/common/Section";
import Header from "../components/common/Header";
import PlansCards from "../components/plans/PlansCards";
import PlansHow from "../components/plans/PlansHow";
import Footer from "../components/common/Footer";


function Plans() {
    return (
            <>
               <Header/>
               <PlansHero/>
               <Section>
                     <PlansHow/> 
               </Section>
               <Section>
                  <PlansCards />
               </Section>
               <Footer/>
            </>
      );
}

export default Plans;