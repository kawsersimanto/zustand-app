"use client";

import Counter from "@/components/counter/Counter";
import useCounterStore from "@/zustand/counter/counterStore";

const Home = () => {
  const count = useCounterStore((state) => state.count);
  return (
    <>
      <h1>{count}</h1>
      <Counter />
    </>
  );
};

export default Home;
