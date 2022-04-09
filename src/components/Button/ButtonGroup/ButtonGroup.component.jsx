import { useState } from "react";
import Button from "../Button.component";

const ButtonGroup = (props) => {
  const [active, setActive] = useState(props.initialActive);

  const handleOnClick = (id, callback) => {
    setActive(id);
    if (typeof callback === "function") callback();
  };

  /*
    @param {any} id - required
  */
  const makeButtons = props.children.map((button, index) => {
    return (
      <Button
        key={index}
        id={index}
        onClick={() => handleOnClick(index, button.props.onClick)}
        active={index === active ? true : false}
        allowed={button.props.allowed}
      >
        {button.props.children}
      </Button>
    );
  });

  return <div className={`${props.className} button-group`}>{makeButtons}</div>;
};

export default ButtonGroup;
