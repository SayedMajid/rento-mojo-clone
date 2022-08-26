// This is App Reducer

const initState = {
    products: [],
    isLoading: false,
    isError: false,
  };
  
  export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
      default:
        return state;
    }
  };
