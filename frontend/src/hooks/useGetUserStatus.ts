import { useState } from "react";

function usegetUserStatus() {
    const [isLoggedIn] = useState(() => Boolean(localStorage.getItem("accessToken")));

    return { isUserLogin: isLoggedIn };
}


export default usegetUserStatus;