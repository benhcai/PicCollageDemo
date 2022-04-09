export const handleMouseDownLeft = (e, grids) => {
  const { grid0, grid2 } = grids;
  const prevX = e.clientX;
  const initialWidth0 = grid0.current.offsetWidth;
  const initialWidth2 = grid2.current.offsetWidth;

  const handleMouseMove = (e) => {
    grid0.current.style.width = `${initialWidth0 - (e.clientX - prevX)}px`;
    grid2.current.style.width = `${initialWidth2 - (e.clientX - prevX)}px`;
  };
  const handleMouseUp = (e) => {
    window.removeEventListener("mousemove", handleMouseMove);
  };
  window.addEventListener("mousemove", handleMouseMove);
  // The mouseup event will only fire once, all cleanup will be executed in that execution. {once: true} means it will then remove itself after the one trigger.
  window.addEventListener("mouseup", handleMouseUp, { once: true });
};
