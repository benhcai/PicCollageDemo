export const handleMouseDownLeftRight = (e, grids) => {
  const { grid0, grid1, grid2, grid3 } = grids;
  const prevX = e.clientX;
  const initialWidth0 = grid0.current.offsetWidth;
  const initialWidth1 = grid1.current.offsetWidth;
  const initialWidth2 = grid2.current.offsetWidth;
  const initialWidth3 = grid3.current.offsetWidth;

  const handleMouseMove = (e) => {
    grid0.current.style.width = `${initialWidth0 + (e.clientX - prevX)}px`;
    grid2.current.style.width = `${initialWidth2 + (e.clientX - prevX)}px`;

    grid1.current.style.width = `${initialWidth1 - (e.clientX - prevX)}px`;
    grid3.current.style.width = `${initialWidth3 - (e.clientX - prevX)}px`;
  };
  const handleMouseUp = (e) => {
    window.removeEventListener("mousemove", handleMouseMove);
  };
  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("mouseup", handleMouseUp, { once: true });
};
