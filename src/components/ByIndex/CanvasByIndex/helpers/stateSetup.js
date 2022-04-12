export const makeNewStateObject = (initialState) => ({ ...initialState });

export const makeGridState = (amount, initialGridProperties) => {
  const store = [];
  for (let i = 0; i < amount; i++) {
    store.push(makeNewStateObject(initialGridProperties));
  }
  return store;
};

export const setGridFeatureFactory = (setStoreFunction, selectedIndex) => {
  // Create closure for setGridFeature function with local variables setStore and index.
  // The setStoreFunction will not change but the selectedIndex will,
  // creating a new output function on each call of setSelectedIndex
  const setStore = setStoreFunction;
  const index = selectedIndex;

  const setGridFeature = (property, val) => {
    setStore((prevStore) => {
      const newStore = [...prevStore];
      newStore[index][property] = val;
      return newStore;
    });
  };

  return setGridFeature;
};
