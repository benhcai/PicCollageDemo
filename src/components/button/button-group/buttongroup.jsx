import { useState } from "react";
import Button from "../button";

const ButtonGroup = (props) => {
  const [active, setActive] = useState(null);

  const handleOnClick = (id, callback) => {
    setActive(id);
    callback();
  };

  const makeButtons = props.children.map((button, index) => {
    return (
      <Button
        key={index}
        id={index}
        onClick={() => handleOnClick(index, button.props.onClick)}
        active={index === active ? true : false}
      >
        {button.props.children}
      </Button>
    );
  });

  return <div className={`${props.className} button-group`}>{makeButtons}</div>;
};

export default ButtonGroup;
