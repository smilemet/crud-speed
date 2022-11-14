import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { redirect } from "react-router-dom";
import { editItem, addItem } from "../slices/ListSlice";

const Form = (props) => {
  const dispatch = useDispatch();

  const titleRef = useRef();
  const bodyRef = useRef();

  const onRegister = (e) => {
    e.preventDefault();

    let title = titleRef.current.value;
    let body = bodyRef.current.value;

    console.log(title);

    if (props.type === "add") {
      dispatch(addItem({ title, body }));
    }
    if (props.type === "edit") {
      dispatch(editItem({ id: props.id, title, body }));
    }

    window.location.href = "/";
  };

  return (
    <>
      <form onSubmit={onRegister}>
        <div>
          <label htmlFor="title">제목</label>
          <input type="text" id="title" ref={titleRef} defaultValue={props?.title} />

          <label htmlFor="body">내용</label>
          <input type="text" id="body" ref={bodyRef} defaultValue={props?.body} />

          <button type="submit">등록하기</button>
        </div>
      </form>
    </>
  );
};

export default Form;
