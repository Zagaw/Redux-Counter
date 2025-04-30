import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

interface counterState {
    count: number,
}

const initialState : counterState = {
    count: 0,
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        incrementByAmount: (state, action : PayloadAction<number>) => {
            state.count += action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(incrementAsync.pending, () => {
            console.log("IncrementAsync is pending...");
        }).addCase(incrementAsync.fulfilled, (state, action : PayloadAction<number>) => {
            state.count += action.payload;
        })
    }
});

export const incrementAsync = createAsyncThunk(
    "counter/incrementAsync",
    async (amount : number) => {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        return amount;
    }
)

export const {increment, decrement, incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;