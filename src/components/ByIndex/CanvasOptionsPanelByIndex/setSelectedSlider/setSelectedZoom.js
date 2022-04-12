const setSelectedZoom = (val, selectedIndex, setGridPropsId) => {
  setGridPropsId[selectedIndex]((prevProps) => ({ ...prevProps, zoom: val }));
};

export default setSelectedZoom;
