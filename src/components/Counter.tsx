import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { decrement, increment, incrementAsync, incrementByAmount } from "../slices/counter";

function Counter() {

    const count = useSelector((state: RootState) => state.counter.count);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incrementByAmount(10))}>Increment by 10</button>
            <button onClick={() => dispatch(incrementAsync(10))}>IncrementAsync by 10</button>
        </div>
    )
}

export default Counter;