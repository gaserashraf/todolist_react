import React, { useContext } from "react";
import ListContext from "../../context/listContext";
const Filter = () => {
  const listContext = useContext(ListContext);
  let FinshItems = 0;
  listContext.allItems.forEach((element) => {
    if (element.type == "finish") FinshItems++;
  });
  return (
    <div className="row w-75">
      <div className="d-flex w-100 justify-content-between mb-2">
        <div className="d-flex">
          <p className="text-muted">
            {FinshItems + " of " + listContext.allItems.length + " tasks"}
          </p>
          <a
            style={{ background: "none" }}
            className="btn p-0 m-0 ml-3 text-muted"
            onClick={listContext.clearFinished}
          >
            Clear Finished
          </a>
        </div>
        <div></div>
        <div>
          <button
            style={{ border: "1px solid rgb(12, 92, 117)" }}
            className="btn bg-light"
            onClick={listContext.clearFilter}
          >
            All
          </button>
          <button
            style={{ border: "1px solid rgb(12, 92, 117)" }}
            className="btn bg-light"
            onClick={() => listContext.filterItems("finish")}
          >
            Finised
          </button>
          <button
            style={{ border: "1px solid rgb(12, 92, 117)" }}
            className="btn bg-light"
            onClick={() => listContext.filterItems("normal")}
          >
            Active
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
