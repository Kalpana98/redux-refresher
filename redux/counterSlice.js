const initialState = 20;

export const counterSlice = RTK.createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: (state) => state + 10,
		decrement: (state) => state - 10,
		reset: () => initialState,
	},
});

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;
