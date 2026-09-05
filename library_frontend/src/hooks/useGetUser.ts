import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store";
import { fetchUser } from "../store/UserSlice/userSlice";

function useGetUser() {
    const dispatch = useDispatch<AppDispatch>();
    const { userName, isLoading, error } = useSelector((state: RootState) => state.user);

    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);

    return { userName, isLoading, error };
}

export default useGetUser;
