// Mocking Redux Store
class ReduxStore {
	#counter;
	#listenerFn;
	constructor() {
		this.#counter = 100;
	}

	getState() {
		return this.#counter;
	}

	subscribe(updateFn) {
		this.#listenerFn = updateFn; // Will invoke on dispatch
		return () => (this.#counter = 100); // To Reset
	}

	reducer(currentState, action) {
		if (!action.type) throw 'No action type!';
		if (action.type === 'INC') {
			return currentState + action.payload;
		} else if (action.type === 'DEC') {
			return currentState - action.payload;
		} else {
			return currentState;
		}
	}

	dispatch(action) {
		this.#counter = this.reducer(this.#counter, action);
		this.#listenerFn(); // To update the UI
	}
}

const store1 = new ReduxStore();

const counterDiv = document.getElementById('counter');
counterDiv.innerHTML = store1.getState(); // Initial Render

const unsubscribe = store1.subscribe(() => (counterDiv.innerHTML = store1.getState())); // For Update

function increment() {
	const action = {
		type: 'INC',
		payload: 10,
	};
	store1.dispatch(action);
}

function decrement() {
	const action = {
		type: 'DEC',
		payload: 10,
	};
	store1.dispatch(action);
}

function reset() {
	unsubscribe();
	store1.dispatch({ type: 'RESET' });
}
