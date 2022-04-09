export const chooseCollageStyling = (collage) => {
  if ((collage = "2x2"))
    return {
      gridTemplateRows: "auto auto",
      gridTemplateColumns: "auto auto",
    };

  if ((collage = "3x3"))
    return {
      gridTemplateRows: "auto auto auto",
      gridTemplateColumns: "auto auto auto",
    };

  if ((collage = "4x4"))
    return {
      gridTemplateRows: "auto auto auto auto",
      gridTemplateColumns: "auto auto auto auto",
    };
};
