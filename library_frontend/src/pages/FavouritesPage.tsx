import { useState,useEffect } from "react";


function FavouritesPage() {

    const [data, setData] = useState([]);

    useEffect(()=>{

        const  getData = async () => {

            const res = await fetch('http://localhost:5110/search/Books/rerecomended',{
                method: "GET",
                headers: { "Content-Type": "application/json", 
                    'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
                 },
                
            })

            const data =  await res.json();

            setData(data);
        }

    },[])



    return ( 
        <div>
            <h1>fav</h1>   
        </div>
     );
}

export default FavouritesPage;