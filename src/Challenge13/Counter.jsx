import { useDispatch, useSelector } from 'react-redux';
import { incrementBy, decrement } from './slices/counterSlice';

function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.value);

  return (
    <div>
      <button onClick={() => dispatch(incrementBy(5))}>Incrementar en 5</button>
      <button onClick={() => dispatch(decrement())}>Decrementar en 1</button>
      <p>Valor: {counter}</p>
    </div>
  );
}

export default Counter
