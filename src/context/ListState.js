import React, { useReducer,useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ListContext from "./listContext";
import ListReducer from "./listRudcer";
import {
  ADD_ITEM,
  EDIT_ITEM,
  DELETE_ITEM,
  FINISH_ITEM,
  UNFINISH_ITEM,
  FILTER_ITEMS,
  CLEAR_FILTER,
  CLEAR_FINISH,
} from "./types";
const ListState = (props) => {
  const initialState = {
    allItems: JSON.parse(localStorage.getItem("items"))||[],
    filtesItems: [],
    isFilterd:false
  };
  useEffect(()=>{
    localStorage.setItem("items",JSON.stringify(state.allItems));
  })
  const [state, dispatch] = useReducer(ListReducer, initialState);
  // add item
  const addItem = (item) => {
    item.id = uuidv4();
    item.type = "normal";
    //console.log(item);
    dispatch({ type: ADD_ITEM, payload: item });
    //console.log(localStorage.getItem("items"));
  };
  // update item
  const updateItem = (item) => {
    dispatch({ type: EDIT_ITEM, payload: item });
  };
  // delete item
  const deleteItem = (id) => {
    dispatch({ type: DELETE_ITEM, payload: id });
  };
  // filter items
  const filterItems = (type) => {
    dispatch({ type: FILTER_ITEMS, payload: type });
  };
  // clear filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };
  // make it finish
  const makeFinish = (id) => {
    //console.log(item);
    dispatch({ type: FINISH_ITEM, payload: id });
  };
  // make it unfinish
  const makeUnFinish = (id) => {
    //console.log(item);
    dispatch({ type: UNFINISH_ITEM, payload: id });
  };
  // clear finish
  const clearFinished = () => {
    dispatch({ type: CLEAR_FINISH });
  };
  return (
    <ListContext.Provider
      value={{
        allItems: state.allItems,
        filtesItems: state.filtesItems,
        isFilterd:state.isFilterd,
        addItem,
        makeFinish,
        makeUnFinish,
        filterItems,
        clearFilter,
        clearFinished,
        updateItem
      }}
    >
      {props.children}
    </ListContext.Provider>
  );
};
export default ListState;
