import React, { useState, useContext, Fragment } from "react";
import ListContext from "../../context/listContext";
import "./editItem.css";
import { Modal, Button } from "react-bootstrap";

const UpdateItem = (props) => {
  const listContext = useContext(ListContext);

  const [show, setShow] = useState(false);
  const [text, setText] = useState(props.item.text);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    background: "#34B461",
    borderRadius: "50%",
    boxShadow: "1px 1px 5px 2px #0C5C75",
  };
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    handleClose();
    let item = props.item;
    item.text=text;
    console.log(item);
    listContext.updateItem(item);
  };

  return (
    <Fragment>
      <div onClick={handleShow} className="mr-2 edit">
        <i className="fas fa-edit" style={{ fontSize: "20px" }}></i>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update this task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input className="form-control" value={text} onChange={onChange} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            style={{ background: "rgb(27, 157, 179)" }}
            onClick={onSubmit}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default UpdateItem;
