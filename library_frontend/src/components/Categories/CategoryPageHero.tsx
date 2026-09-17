import Container from "../common/Container";
import { Button } from "@mui/material";
import Header from "../common/Header";
import{ Link }from "react-router";
import useGetUser from "../../hooks/useGetUser";

function CategoryPageHero({ header }) {

    const {userName} = useGetUser();


    return ( 
        <>
            <Header/>
            <div className="bg-gradient-to-br from-green-50 via-white to-green-100">
                <Container>
                    <div className="py-16 md:py-24">
                        <div className="max-w-2xl">
                            <h1 className="text-5xl md:text-6xl uppercase font-bold leading-tight text-green-300 mb-6">{header}</h1>
                            <p className="text-lg text-slate-500 mb-8">desc desc desc</p>
                            <Button component={Link} to={`users/${userName}`} className="primary-button" variant='contained'> Try Premium</Button>
                        </div>
                    </div>
                </Container>
            </div>
        </>
     );
}

export default CategoryPageHero;