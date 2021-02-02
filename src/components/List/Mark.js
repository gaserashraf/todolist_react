import React, { useContext } from "react";
import ListContext from "../../context/listContext";
const Mark = (props) => {
  const listContext = useContext(ListContext);

  const btnNormal = {
    width: "30px",
    height: "30px",
   // background: "#fff",
    borderRadius: "50%",
    boxShadow: "1px 1px 5px 2px #0C5C75",
  };
  const btnFinish = {
    width: "30px",
    height: "30px",
    background: "#fff",
    borderRadius: "50%",
    boxShadow: "1px 1px 5px 2px #0C5C75",
  };
  const toggleEdit = (e) => {
    if (props.item.type == "normal") listContext.makeFinish(props.item.id);
    else listContext.makeUnFinish(props.item.id);
  };
  if (props.item.type == "normal")
    return <div style={btnNormal} onClick={toggleEdit}></div>;
  else
    return (
      <div
        style={btnFinish}
        className="d-flex justify-content-center align-items-center"
        onClick={toggleEdit}
      >
        <i className="fas fa-check"></i>
      </div>
    );
};

export default Mark;
