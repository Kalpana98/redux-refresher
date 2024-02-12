const initialState = 50;

export function reducer(currentState = initialState, action) {
	switch (action.type) {
		case 'counter/inc':
			return currentState + action.payload;
		case 'counter/dec':
			return currentState - action.payload;
		case 'counter/reset':
			return initialState;
		default:
			return currentState;
	}
}

// Action Creators
export function increment() {
	return { type: 'counter/inc', payload: 10 };
}

export function decrement() {
	return { type: 'counter/dec', payload: 10 };
}

export function reset() {
	return { type: 'counter/reset' };
}
