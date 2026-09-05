import { useParams } from "react-router";
import { Button } from "@mui/material";
import Container from '../../components/common/Container'
import Section from "../common/Section";
import CategoryPageSwiper from "./CategoryPageSwiper";
import CategoryPageHero from "./CategoryPageHero";
import Footer from "../common/Footer";

function CategoryPage() {
    const { name } = useParams();

    return ( 
        <>
                <CategoryPageHero header={ name }/>
                {/* Grid */}
                
                    <h2>Explore {name}</h2>
                        <Container>
                            <CategoryPageSwiper/>
                        </Container>
                
                {/* Second_Grid */}
                <Section>
                    <Container>
                        <CategoryPageSwiper/>
                    </Container>
                </Section>
            <Footer/>
        </>
     );
}

export default CategoryPage;