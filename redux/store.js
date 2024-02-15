import counterReducer from './counterSlice.js';

export const store1 = RTK.configureStore({
	reducer: {
		counter: counterReducer,
	},
});
