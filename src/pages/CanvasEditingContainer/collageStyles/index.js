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

export const chooseMaxImages = (collage) => {
  if ((collage = "2x2")) return 4;
  if ((collage = "3x3")) return 9;
  if ((collage = "4x4")) return 16;
};
