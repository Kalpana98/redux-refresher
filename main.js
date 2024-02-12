import { store1 } from './redux/store.js';

function App() {
	const [counter, setCounter] = React.useState(store1.getState());

	function increment() {
		const action = { type: 'INC', payload: 10 };
		store1.dispatch(action);
	}

	function decrement() {
		const action = { type: 'DEC', payload: 10 };
		store1.dispatch(action);
	}

	const unsubscribe = store1.subscribe(() => setCounter(store1.getState()));

	function reset() {
		unsubscribe();
		store1.dispatch({ type: 'RESET' });
	}

	return (
		<>
			<button onClick={decrement}>Dec</button>
			<span className='counter'>{counter}</span>
			<button onClick={increment}>Inc</button>
			<br />
			<button onClick={reset}>Reset</button>
		</>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
