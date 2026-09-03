
import { useState, useEffect } from "react";

function Cto() {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await fetch("http://localhost:5110/search/User")
                const data = await res.json();
                setUserName(data);
                console.log(data)
            }
            catch(err)
            {
                console.log(err)
            }
        };
        fetchData();
    }, [])

    return ( 
        <>
          
                <div className="grid grid-cols-[2fr_1fr]">
                    <div>
                        <h1 className="text-3xl text-amber-300">Welcome {userName}</h1>
                    </div>
                </div>
        
        </>
     );
}

export default Cto;