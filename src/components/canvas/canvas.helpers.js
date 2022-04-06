export const makeLinkedProperty = (e, target, property) => {
  if (property === "width") {
    if (e.target.offsetWidth !== target.current.offsetWidth) {
      target.current.style[property] = `${e.target.offsetWidth}px`;
    }
  }
  if (property === "height") {
    if (e.target.offsetHeight !== target.current.offsetHeight) {
      target.current.style[property] = `${e.target.offsetHeight}px`;
    }
  }
};

export const generateImagesOptions = (index, grids, gridProps) => {
  const { grid0, grid1, grid2, grid3 } = grids;
  const { grid0Props, grid1Props, grid2Props, grid3Props } = gridProps;

  if (index === 0)
    return {
      refVal: grid0,
      angle: grid0Props.angle,
      zoom: grid0Props.zoom,
      horizontal: grid0Props.horizontal,
      vertical: grid0Props.vertical,
    };
  if (index === 1)
    return {
      refVal: grid1,
      angle: grid1Props.angle,
      zoom: grid1Props.zoom,
      horizontal: grid1Props.horizontal,
      vertical: grid1Props.vertical,
    };
  if (index === 2)
    return {
      refVal: grid2,
      angle: grid2Props.angle,
      zoom: grid2Props.zoom,
      horizontal: grid2Props.horizontal,
      vertical: grid2Props.vertical,
    };
  if (index === 3)
    return {
      refVal: grid3,
      angle: grid3Props.angle,
      zoom: grid3Props.zoom,
      horizontal: grid3Props.horizontal,
      vertical: grid3Props.vertical,
    };
};
