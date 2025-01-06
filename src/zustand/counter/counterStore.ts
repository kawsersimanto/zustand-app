import { create } from "zustand";
import { persist } from "zustand/middleware";

export type State = {
  count: number;
};

export type Actions = {
  increment: () => void;
  decrement: () => void;
};

const initialState: State = {
  count: 0,
};

const useCounterStore = create<State & Actions>()(
  persist(
    (set) => ({
      ...initialState,
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () =>
        set((state) => ({
          count: state.count === 0 ? state.count : state.count - 1,
        })),
    }),
    {
      name: "counter",
    }
  )
);

export default useCounterStore;
