const setSelectedZoom = (val, selectedGrid, grids, setGridProps) => {
  let { grid0, grid1, grid2, grid3 } = grids;
  let { setgrid0Props, setgrid1Props, setgrid2Props, setgrid3Props } = setGridProps;
  if (selectedGrid === grid0.current) setgrid0Props((prevProps) => ({ ...prevProps, zoom: val }));
  if (selectedGrid === grid1.current) setgrid1Props((prevProps) => ({ ...prevProps, zoom: val }));
  if (selectedGrid === grid2.current) setgrid2Props((prevProps) => ({ ...prevProps, zoom: val }));
  if (selectedGrid === grid3.current) setgrid3Props((prevProps) => ({ ...prevProps, zoom: val }));
};

export default setSelectedZoom;
