import { useState } from "react";
import RecomendedList from "./RecomendedList";

//lib
import fantasyAuthors from '../lib/Authors/fantasyAuthors';

function Recomend() {
    const [pageType,setPageType] = useState("fantasy");
    
    return ( 
        <>
            {pageType === "fantasy" &&  <RecomendedList title={"fantast authors"}  authors={fantasyAuthors}/>}
        </>
     );
}

export default Recomend;