export const handleMouseDownBottom = (e, grids) => {
  const [grid0, grid1, grid2, grid3] = grids;
  const prevY = e.clientY;
  const initialHeight0 = grid0.current.offsetHeight;
  const initialHeight1 = grid1.current.offsetHeight;
  const initialHeight2 = grid2.current.offsetHeight;
  const initialHeight3 = grid3.current.offsetHeight;

  const handleMouseMove = (e) => {
    grid0.current.style.height = `${initialHeight0 + (e.clientY - prevY)}px`;
    grid1.current.style.height = `${initialHeight1 + (e.clientY - prevY)}px`;

    grid2.current.style.height = `${initialHeight2 - (e.clientY - prevY)}px`;
    grid3.current.style.height = `${initialHeight3 - (e.clientY - prevY)}px`;
  };
  const handleMouseUp = (e) => {
    window.removeEventListener("mousemove", handleMouseMove);
  };
  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("mouseup", handleMouseUp, { once: true });
};
