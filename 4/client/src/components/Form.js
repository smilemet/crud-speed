import React, { useRef } from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { addItem, editItem } from "../slices/ListSlice.js";
import { useParams } from "react-router-dom";

const FormContainer = styled.form``;

const Form = (props) => {
  const dispatch = useDispatch();
  const params = useParams();

  const titleRef = useRef();
  const bodyRef = useRef();

  const { type } = props;

  const onRegister = (e) => {
    e.preventDefault();

    const id = params.id;
    const title = titleRef.current.value;
    const body = bodyRef.current.value;

    if (type === "add") {
      dispatch(addItem({ title, body }));
    } else if (type === "edit") {
      console.log(props.edit.title);
      dispatch(editItem({ id: props.edit.id, title, body }));
    }

    window.location.href = "/";
  };
  return (
    <FormContainer onSubmit={onRegister}>
      <div>
        <label htmlFor="title">제목: </label>
        <input type="text" id="title" ref={titleRef} defaultValue={props?.edit?.title} />
      </div>
      <div>
        <label htmlFor="body">본문: </label>
        <input type="text" id="body" ref={bodyRef} defaultValue={props?.edit?.body} />
      </div>
      <button type="submit">등록하기</button>
    </FormContainer>
  );
};

export default Form;
