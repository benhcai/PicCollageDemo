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

export const generateImagesOptionsV2 = (index, grids, gridProps, gridPropsMap) => {
  const { grid0, grid1, grid2, grid3 } = grids;

  let currentRef = null;
  if (index === 0) currentRef = grid0;
  if (index === 1) currentRef = grid1;
  if (index === 2) currentRef = grid2;
  if (index === 3) currentRef = grid3;

  return {
    currentRef: currentRef,
    angle: gridPropsMap[currentRef.id].angle,
    zoom: gridPropsMap[currentRef.id].zoom,
    horizontal: gridPropsMap[currentRef.id].horizontal,
    vertical: gridPropsMap[currentRef.id].vertical,
  };
};
