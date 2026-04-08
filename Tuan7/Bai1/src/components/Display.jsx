import { useRecoilValue } from "recoil";
import { counterState } from "../state/counterState";

export default function Display() {
  const count = useRecoilValue(counterState);

  return <h2>Count: {count}</h2>;
}