import { createSlice } from "@reduxjs/toolkit"


type SearchState = {
    value: string;
};

const initialState: SearchState = {
    value: "",
};

const SliceSearchedBooks = createSlice({

    name: "searchedBooks",
    initialState,
    reducers: {},


});


export default SliceSearchedBooks.reducer;
