import { store1 } from './redux/store.js';
import { decrement, increment, reset } from './redux/counterSlice.js';

const { useSelector, useDispatch, Provider } = ReactRedux;

function App() {
	const counter = useSelector((state) => state.counter);
	const dispatch = useDispatch();

	return (
		<>
			<button onClick={() => dispatch(decrement())}>Dec</button>
			<span className='counter'>{counter}</span>
			<button onClick={() => dispatch(increment())}>Inc</button>
			<br />
			<button onClick={() => dispatch(reset())}>Reset</button>
		</>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<Provider store={store1}>
		<App />
	</Provider>
);
