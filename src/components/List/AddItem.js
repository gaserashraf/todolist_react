import React, { useState, useContext } from "react";
import ListContext from "../../context/listContext";
const AddItem = () => {
  const listContext = useContext(ListContext);
  const [search, setSearch] = useState("");
  const onChange = (e) => {
    setSearch(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    //props.searchUsers(search);
    listContext.addItem({text:search})
    setSearch("");
  };
  return (
    <form
      onSubmit={onSubmit}
      className="row w-75 justify-content-between mb-2 boxItem"
    >
      <input
        type="text"
        name="search"
        placeholder="Add new task.."
        value={search}
        onChange={onChange}
        className="form-control form-control-lg"
        required
      />
      <input
        type="submit"
        value="Add"
        className="btn btn-dark btn-block"
        style={{ background: "#0C5C75" }}
      />
    </form>
    
  );
};

export default AddItem;
