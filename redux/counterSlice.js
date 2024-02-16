const initialState = 20;

export const incrementAsync = RTK.createAsyncThunk('counter/incrementAsync', () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
			// reject();
		}, 2000);
	});
});

export const counterSlice = RTK.createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: (state) => state + 10,
		decrement: (state) => state - 10,
		reset: () => initialState,
	},
	// extraReducers: {
	// 	[incrementAsync.pending]: (state) => state,
	// 	[incrementAsync.fulfilled]: (state) => state + 10,
	// 	[incrementAsync.rejected]: () => 0,
	// },
	// OR
	extraReducers: (builder) => {
		builder
			.addCase(incrementAsync.pending, (state) => state)
			.addCase(incrementAsync.fulfilled, (state) => state + 10)
			.addCase(incrementAsync.rejected, () => 0);
	},
});

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;
