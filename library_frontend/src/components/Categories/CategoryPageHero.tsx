import Container from "../common/Container";
import { Button } from "@mui/material";
import Header from "../common/Header";

function CategoryPageHero({ header }) {
    return ( 
        <>
            <Header/>
            <div className="h-[60vh] flex items-center p-8">
                <div>
                    <h1 className="text-6xl uppercase  font-bold leading-tigh text-green-300">{header}</h1>
                    <p>desc desc desc </p>
                    <Button variant="contained" size="large" className="!bg-green-400">Try Premium</Button>
                </div>


            </div>
        </>
     );
}

export default CategoryPageHero;