import { useState } from "react";

const Action = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <button
      onClick={handleClick}
      className={`material-icons ${!toggle && `empty`}`}
    >
      {toggle ? "star" : "star_border"}
    </button>
  );
};
export default Action;
