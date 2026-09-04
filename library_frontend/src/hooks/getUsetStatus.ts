import { useState } from "react";

function getUserStatus(){
    [isLoggedIn,setIsLoggedIn] = useState(false);

    const token = localStorage.getItem("accessToken");
    setIsLoggedIn(token );


    return(
        
    )
   
}