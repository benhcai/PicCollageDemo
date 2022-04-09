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

// export const generateImagesOptions = (index, grids, gridProps, gridPropsMap) => {
//   const { grid0, grid1, grid2, grid3 } = grids;
//   // const { grid0Props, grid1Props, grid2Props, grid3Props } = gridProps;

//   // if (index === 0)
//   //   return {
//   //     currentRef: grid0,
//   //     angle: grid0Props.angle,
//   //     zoom: grid0Props.zoom,
//   //     horizontal: grid0Props.horizontal,
//   //     vertical: grid0Props.vertical,
//   //   };
//   // if (index === 1)
//   //   return {
//   //     currentRef: grid1,
//   //     angle: grid1Props.angle,
//   //     zoom: grid1Props.zoom,
//   //     horizontal: grid1Props.horizontal,
//   //     vertical: grid1Props.vertical,
//   //   };
//   // if (index === 2)
//   //   return {
//   //     currentRef: grid2,
//   //     angle: grid2Props.angle,
//   //     zoom: grid2Props.zoom,
//   //     horizontal: grid2Props.horizontal,
//   //     vertical: grid2Props.vertical,
//   //   };
//   // if (index === 3)
//   //   return {
//   //     currentRef: grid3,
//   //     angle: grid3Props.angle,
//   //     zoom: grid3Props.zoom,
//   //     horizontal: grid3Props.horizontal,
//   //     vertical: grid3Props.vertical,
//   //   };
// };

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
