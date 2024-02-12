function reducer(currentState = 50, action) {
	switch (action.type) {
		case 'INC':
			return currentState + action.payload;
		case 'DEC':
			return currentState - action.payload;
		case 'RESET':
			return 50;
		default:
			return currentState;
	}
}

export const store1 = Redux.createStore(reducer);
