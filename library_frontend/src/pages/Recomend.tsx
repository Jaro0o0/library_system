import { useState } from "react";
import RecomendedList from "./RecomendedList";

//lib
import fantasyAuthors from '../lib/Authors/fantasyAuthors';
import sciFiAuthors from '../lib/Authors/sciFiAuthors';
import scienceAuthors from '../lib/Authors/scienceAuthors';

import { useNavigate } from "react-router";

function Recomend() {
    const [pageType,setPageType] = useState("fantasy");
    const [selectedAuthors, setSelectedAuthors] = useState<string[]>([]);

    const navigate = useNavigate();

    const submitAuthors = async (authors: string[]) => {
        const allAuthors = [...selectedAuthors, ...authors];

        if (pageType !== "science") {
            setSelectedAuthors(allAuthors);
            setPageType(pageType === "fantasy" ? "sci-fi" : "science");
            return;
        }

        try {
            const response = await fetch("http://localhost:5110/search/Books/recomended", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ authors: allAuthors }),
            });

            if (!response.ok) {
                throw new Error(await response.text());
            }

            if (response.ok) {
                const data = await response.json();
                navigate("/users/:name"); // Navigate to the home page after successful submission
            }


        } catch (error) {
            console.error("Nie udało się zapisać rekomendowanych autorów.", error);
        }
    };
    
    return ( 
        <>
            {pageType === "fantasy" &&  <RecomendedList title={"fantasy authors"} authors={fantasyAuthors} onSubmit={submitAuthors}/>}
            {pageType === "sci-fi" &&  <RecomendedList title={"sci-fi authors"} authors={sciFiAuthors} onSubmit={submitAuthors}/>}
            {pageType === "science" &&  <RecomendedList title={"science authors"} authors={scienceAuthors} onSubmit={submitAuthors}/>}
        </>
     );
}

export default Recomend;
