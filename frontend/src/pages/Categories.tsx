import CategoriesList from "../components/Categories/CategoreisList";
import Section from "../components/common/Section";
import Footer from "../components/common/Footer";
import CategoriesHero from "../components/Categories/CategoriesHero";

function Categories() {
    return ( 
        <>
        <CategoriesHero/>
        <Section>
            <CategoriesList/>
        </Section>
        <Footer/>
        </>
     );
}

export default Categories;