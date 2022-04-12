import { Fragment } from "react";
import { handleMouseDownLeft } from "./handleMouseDownLeft";
import { handleMouseDownLeftRight } from "./handleMouseDownLeftRight";
import { handleMouseDownBottom } from "./handleMouseDownBottom";
import { handleMouseDownRight } from "./handleMouseDownRight";

export const makeGridHandles2x2 = (index, gridRefs) => {
  if (index === 0) {
    return (
      <Fragment>
        <div
          className="handle handle-left"
          onMouseDown={(e) => {
            // handleMouseDownLeft(e, grids);
            handleMouseDownLeft(e, gridRefs);
          }}
        ></div>
        <div
          className="handle handle-leftright"
          onMouseDown={(e) => handleMouseDownLeftRight(e, gridRefs)}
        ></div>
        <div
          className="handle handle-bottom"
          onMouseDown={(e) => handleMouseDownBottom(e, gridRefs)}
        ></div>
      </Fragment>
    );
  }
  if (index === 1) {
    return (
      <Fragment>
        <div
          className="handle handle-right"
          onMouseDown={(e) => handleMouseDownRight(e, gridRefs)}
        ></div>
      </Fragment>
    );
  }
};
