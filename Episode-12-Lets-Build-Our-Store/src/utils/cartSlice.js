import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Vanialla( Older Redux ) - DON'T MUTATE STATE, returning was mandatory
      // const newState = [...state];
      // newState.items.push(action.payload);
      // return newState;

      // Redux Toolkit uses immer.js behind the scene.
      // WE HAVE to mutate the state

      // mutating the state here ( in new REDUX )
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    // originalState = {items:["Pizza"]}
    clearCart: (state, action) => {
      // console.log(current(state));
      // RTK - either Mutate the existing state or return a new State
      // state.items.length = 0; // originalState = []
      // or
      return { items: [] }; // this new object will be replaced inside originalState = { items: [] }
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
