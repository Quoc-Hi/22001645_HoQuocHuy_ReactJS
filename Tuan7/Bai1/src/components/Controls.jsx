import { useRecoilState } from "recoil";
import { counterState } from "../state/counterState";

export default function Controls() {
  const [count, setCount] = useRecoilState(counterState);

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}