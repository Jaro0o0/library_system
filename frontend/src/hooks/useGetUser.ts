import { useEffect, useState } from "react";

function useGetUser(): { userName: string | null  } {
    const [userName, setUserName] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("accessToken");

        if (!token) {
            setUserName("");
            return;
        }

        try {
            const payload = token.split(".")[1];

            if (!payload) {
                setUserName("");
                return;
            }

            const normalized = payload.replace(/-/g, "+").replace(/_/g, "/");
            const decoded = JSON.parse(atob(normalized));
            const nameFromToken =
                decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"] ||
                decoded.unique_name ||
                decoded.name ||
                decoded.userName ||
                "";

            setUserName(nameFromToken);
        } catch {
            setUserName("");
        }
    }, []);

    return { userName };
}

export default useGetUser;
