const setSelectedHorizontal = (val, selectedGrid, grids, setGridProps) => {
  let { grid0, grid1, grid2, grid3 } = grids;
  let { setgrid0Props, setgrid1Props, setgrid2Props, setgrid3Props } = setGridProps;
  if (selectedGrid === grid0) setgrid0Props((prevProps) => ({ ...prevProps, horizontal: val }));
  if (selectedGrid === grid1) setgrid1Props((prevProps) => ({ ...prevProps, horizontal: val }));
  if (selectedGrid === grid2) setgrid2Props((prevProps) => ({ ...prevProps, horizontal: val }));
  if (selectedGrid === grid3) setgrid3Props((prevProps) => ({ ...prevProps, horizontal: val }));
};

export default setSelectedHorizontal;
