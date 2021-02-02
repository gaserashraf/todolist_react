import React,{ useContext } from "react";
import Mark from "./Mark";
import UpdateItem from './UpdateItem'
import "./editItem.css";
import ListContext from "../../context/listContext";
const Item = (props) => {
    const listContext = useContext(ListContext);
    const styleItemNormal={
        borderRadius:'30px',
        padding:'5px 20px',
        boxShadow: "2px 2px 5px 2px #0C5C75",
        background:'#1B9DB3',
      }
    const H1StyleNormal={
        fontSize:'30px',
    }
    const H1StyleFinish={
        fontSize:'30px',
        color:'#F5F5F8',
        opacity:'.5',
        textDecoration:'line-through',
    }
  return (
    <div className="row w-75 justify-content-between mb-3 boxItem" style={styleItemNormal}>
      <div style={{maxWidth:'90%'}}>
        <h1 className='h1 m-0 py-1' style={props.item.type=='normal'?H1StyleNormal:H1StyleFinish}>{props.item.text}</h1>
      </div>
      <div className='d-flex justify-content-center align-items-center'>
        <UpdateItem item ={props.item} />
        <Mark item ={props.item} />
      </div>
    </div>
  );
};

export default Item;
