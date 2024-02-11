// Redux Store
class ReduxStore {
	#counter;
	constructor() {
		this.#counter = 100;
	}

	getState() {
		return this.#counter;
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
	}
}

const store1 = new ReduxStore();

const counterDiv = document.getElementById('counter');
counterDiv.innerHTML = store1.getState();

function increment() {
	const action = {
		type: 'INC',
		payload: 10,
	};
	store1.dispatch(action);

	counterDiv.innerHTML = store1.getState();
}

function decrement() {
	const action = {
		type: 'DEC',
		payload: 10,
	};
	store1.dispatch(action);

	counterDiv.innerHTML = store1.getState();
}
