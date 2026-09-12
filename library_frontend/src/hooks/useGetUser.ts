import { useEffect, useState } from "react";



function useGetUser() {
    const [userName, setUserName] = useState("");

  

    useEffect(() => {

        const fetchUser = async () => {
        const res = await fetch("http://localhost:5110/search/User");
        if (!res.ok) return;

        const data = await res.json();
        setUserName(data.userName);
        
    }

        fetchUser()


    }, []);

    return { userName };
}

export default useGetUser;
