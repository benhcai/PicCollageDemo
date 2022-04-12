const setSelectedVertical = (val, selectedIndex, setGridPropsId) => {
  setGridPropsId[selectedIndex]((prevProps) => ({ ...prevProps, vertical: val }));
};

export default setSelectedVertical;
