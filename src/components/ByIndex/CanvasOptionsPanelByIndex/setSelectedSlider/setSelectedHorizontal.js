const setSelectedHorizontal = (val, selectedIndex, setGridPropsId) => {
  if (selectedIndex === 0)
    setGridPropsId[selectedIndex]((prevProps) => ({ ...prevProps, horizontal: val }));
  if (selectedIndex === 1)
    setGridPropsId[selectedIndex]((prevProps) => ({ ...prevProps, horizontal: val }));
  if (selectedIndex === 2)
    setGridPropsId[selectedIndex]((prevProps) => ({ ...prevProps, horizontal: val }));
  if (selectedIndex === 3)
    setGridPropsId[selectedIndex]((prevProps) => ({ ...prevProps, horizontal: val }));
};

export default setSelectedHorizontal;
