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

export default (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        allItems: [...state.allItems, action.payload],
      };
    case EDIT_ITEM:
      let itemsUpdate = [];
      state.allItems.forEach ((e) => {
        if (e.id === action.payload.id) {
          e.text = action.payload.text;
        }
        itemsUpdate.push(e);
      });
      return {
        ...state,
        allItems: itemsUpdate,
      };
    case DELETE_ITEM:
      let itemsAfterDelete = [];
      state.allItems.forEach = (e) => {
        if (e.id != action.payload) itemsAfterDelete.push(e);
      };
      return {
        ...state,
        allItems: itemsAfterDelete,
      };

    case FINISH_ITEM:
      let nContacts = [];
      state.allItems.forEach((element) => {
        if (element.id == action.payload) {
          element.type = "finish";
        }
        nContacts.push(element);
      });
      return {
        ...state,
        allItems: nContacts,
      };
    case UNFINISH_ITEM:
      let nContacts1 = [];
      state.allItems.forEach((element) => {
        if (element.id == action.payload) element.type = "normal";
        nContacts1.push(element);
      });
      return {
        ...state,
        allItems: nContacts1,
      };
    case FILTER_ITEMS:
      return {
        ...state,
        isFilterd: true,
        filtesItems: state.allItems.filter(
          (item) => item.type == action.payload
        ),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        isFilterd: false,
        filtesItems: [],
      };
    case CLEAR_FINISH: {
      return {
        ...state,
        filtesItems: [],
        isFilterd: false,
        allItems: state.allItems.filter((item) => item.type == "normal"),
      };
    }
    default:
      return state;
  }
};
