import React, { useContext } from "react";
import Item from "./Item";
import AddItem from "./AddItem";
import Filter from "./Filter";
import ListContext from "../../context/listContext";

const ListItems = () => {
  const listContext = useContext(ListContext);

  const style = {
    //background:'#1B9DB3'
  };
  return (
    <div className="container">
      <div className="row justify-content-center" style={style}>
        <AddItem />
        <Filter />
        {!listContext.isFilterd ? (
          listContext.allItems.length ? (
            listContext.allItems.map((item) => (
              <Item key={item.id} item={item} />
            ))
          ) : (
            <p className="row w-75 justify-content-between mb-3 boxItem">
              Ops no work today..
            </p>
          )
        ) : listContext.filtesItems.length ? (
          listContext.filtesItems.map((item) => (
            <Item key={item.id} item={item} />
          ))
        ) : (
          <p className="row w-75 justify-content-between mb-3 boxItem">
            Ops no work today..
          </p>
        )}
      </div>
    </div>
  );
};

export default ListItems;
