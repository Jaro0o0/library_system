import { useEffect, useState } from "react";



function useGetUser() {
    const [userName, setUserName] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("accessToken");

        if (!token) {
            setUserName("");
            return;
        }

        const getUserName = async () => {

            const res = await fetch('http://localhost:5110/search/User', {
                headers: {
                    'Authorization': `Bearer ${token}`
                },
            });

            if (!res.ok) return;

            const data = await res.json();
            setUserName(data.userName);

        };

        getUserName();
    }, []);



    return { userName };
}

export default useGetUser;
