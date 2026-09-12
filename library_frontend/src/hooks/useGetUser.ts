import { useEffect, useState } from "react";



function useGetUser() {
    const [userName, setUserName] = useState("");

  

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        if (!token) return;

        try {
            const tokenPayload = token.split(".")[1]
                .replace(/-/g, "+")
                .replace(/_/g, "/");
            const paddedPayload = tokenPayload.padEnd(
                tokenPayload.length + ((4 - (tokenPayload.length % 4)) % 4),
                "="
            );
            const payload = JSON.parse(atob(paddedPayload)) as Record<string, string>;
            const name =
                payload.unique_name ??
                payload.name ??
                payload["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"] ??
                "";

            setUserName(name);
        } catch {
            setUserName("");
        }


    }, []);

    return { userName };
}

export default useGetUser;
