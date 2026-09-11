import Container from "../components/common/Container";
import { useState, useEffect } from "react";

function HistoryPage() {


    const historyDataHandler =  async () =>{
        
        //Zrrobic osbyn serwis do histori 
        const res = await fetch('http://localhost:5110/search/Books/rent');
        const data = await res.json();
    }


    const [data, setData] = useState();

    useEffect( async () => {
        
        const res = await fetch('http://localhost:5110/search/Books/rent');
        const data = await res.json();
        setData(data)


    }, [])


    return ( 
        <div className="w-full h-screen">
            <Container>
                <h1>History of rents</h1>
                <div>
                        {data}
                </div>
            </Container>

        </div>
     );
}

export default HistoryPage;