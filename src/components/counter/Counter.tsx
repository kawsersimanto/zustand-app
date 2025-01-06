import { Button } from "@/components/ui/button";
import useCounterStore from "@/zustand/counter/counterStore";

const Counter = () => {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <div className="flex gap-2">
      <Button onClick={() => increment()}>Increment</Button>
      <Button disabled={!count} onClick={() => decrement()}>
        Decrement
      </Button>
    </div>
  );
};

export default Counter;
