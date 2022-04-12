const setSelectedHorizontal = (val, selectedIndex, setGridPropsId) => {
  setGridPropsId[selectedIndex]((prevProps) => ({ ...prevProps, horizontal: val }));
};

export default setSelectedHorizontal;
