export const handleMouseDownRight = (e, grids) => {
  const { grid1, grid3 } = grids;
  const prevX = e.clientX;
  const initialWidth1 = grid1.current.offsetWidth;
  const initialWidth3 = grid3.current.offsetWidth;

  const handleMouseMove = (e) => {
    grid1.current.style.width = `${initialWidth1 + (e.clientX - prevX)}px`;
    grid3.current.style.width = `${initialWidth3 + (e.clientX - prevX)}px`;
  };
  const handleMouseUp = (e) => {
    window.removeEventListener("mousemove", handleMouseMove);
  };
  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("mouseup", handleMouseUp, { once: true });
};
