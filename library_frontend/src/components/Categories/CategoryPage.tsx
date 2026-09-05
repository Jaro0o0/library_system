import { useParams } from "react-router";
import { Button } from "@mui/material";
import Container from '../../components/common/Container'
import CategoryPageSwiper from "./CategoryPageSwiper";
import Footer from "../common/Footer";

function CategoryPage() {
    const { name } = useParams();

    return ( 
        <>
                <Container>
                    <h2>{name}</h2>
                    <p>DESC DESC DESC DESC</p>
                    <Button variant="contained">Try now </Button>
                </Container>
                {/* Grid */}
                <h2>Explore {name}</h2>
                <div>
                    <Container>
                      <CategoryPageSwiper/>
                    </Container>
                </div>
            
            <Footer/>
        </>
     );
}

export default CategoryPage;