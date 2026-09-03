import { useState } from "react";
import RecomendedList from "./RecomendedList";

//lib
import fantasyAuthors from '../lib/Authors/fantasyAuthors';
import sciFiAuthors from '../lib/Authors/sciFiAuthors';
import scienceAuthors from '../lib/Authors/scienceAuthors';

function Recomend() {
    const [pageType,setPageType] = useState("fantasy");
    
    return ( 
        <>
            {pageType === "fantasy" &&  <RecomendedList title={"fantasy authors"}  authors={fantasyAuthors} onSubmit={() => setPageType("sci-fi")}/>}
            {pageType === "sci-fi" &&  <RecomendedList title={"sci-fi authors"}  authors={sciFiAuthors} onSubmit={() => setPageType("science")}/>}
            {pageType === "science" &&  <RecomendedList title={"science authors"}  authors={scienceAuthors} onSubmit={() => setPageType("fantasy")}/>}
        </>
     );
}

export default Recomend;