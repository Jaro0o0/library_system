import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

type UserState = {
    userName: string;
    isLoading: boolean;
    error: string | null;
};

const initialState: UserState = {
    userName: "",
    isLoading: false,
    error: null,
};

export const fetchUser = createAsyncThunk(
    "user/fetchUser",
    async () => {
        const res = await fetch("http://localhost:5110/search/User");
        const data = await res.json();
        return data.userName as string;
    }
);

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.userName = action.payload;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message ?? "Failed to fetch user";
            });
    },
});

export default userSlice.reducer;
