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
                
              
                        <Container>
                            <CategoryPageSwiper/>
                        </Container>
                
                {/* Second_Grid */}
             
                    <Container>
                        <CategoryPageSwiper/>
                    </Container>
                
            <Footer/>
        </>
     );
}

export default CategoryPage;