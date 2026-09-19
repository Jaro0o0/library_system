import { useParams } from "react-router";

import Container from '../components/common/Container'

import CategoryPageSwiper from "../components/Categories/CategoryPageSwiper";
import CategoryPageHero from "../components/Categories/CategoryPageHero";
import Footer from "../components/common/Footer";

function CategoryPage() {
    const { name } = useParams();

    return ( 
        <>
                <CategoryPageHero header={ name } />
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