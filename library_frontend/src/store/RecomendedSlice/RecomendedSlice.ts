import { createSlice } from "@reduxjs/toolkit";



const RecomendedSlice = createSlice({
    name: 'recomended',
    initialState: {

        authors: [] as any[]
    },
    reducers: {
        
        addItem: (state,action) => {

            state.authors.push(action.payload)
            
        },
        removeItem :  (state,action) => {

            state.authors.splice(action.payload, 1)
        }
    }
})

export const { addItem, removeItem } = RecomendedSlice.actions;
export default RecomendedSlice.reducer;