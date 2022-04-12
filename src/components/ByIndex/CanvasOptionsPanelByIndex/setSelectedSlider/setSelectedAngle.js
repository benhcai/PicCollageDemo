const setSelectedAngle = (val, selectedIndex, setGridPropsId) => {
  setGridPropsId[selectedIndex]((prevProps) => ({ ...prevProps, angle: val }));
};

export default setSelectedAngle;
