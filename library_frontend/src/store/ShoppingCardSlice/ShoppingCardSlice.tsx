import { createSlice } from "@reduxjs/toolkit";



const shoppingCardSlice = createSlice({
    name: 'shoppingCard',
    initialState: {

        card: [] as any[]
    },
    reducers: {
        
        addItem: (state,action) => {

            state.card.push(action.payload)
        },
        removeItem :  (state,action) => {

            state.card.splice(action.payload, 1)
        }
    }
})

export const { addItem, removeItem } = shoppingCardSlice.actions;
export default shoppingCardSlice.reducer;