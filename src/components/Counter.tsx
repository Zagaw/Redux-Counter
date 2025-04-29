import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { decrement, increment } from "../slices/counter";

function Counter() {

    const count = useSelector((state: RootState) => state.counter.count);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    )
}

export default Counter;