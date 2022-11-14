import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { getItem, addItem, editItem } from "../slices/ListSlice.js";
import { useParams } from "react-router-dom";

const FormContainer = styled.form``;

const Form = (props) => {
  const dispatch = useDispatch();
  const param = useParams();

  const titleRef = useRef();
  const bodyRef = useRef();

  const onRegister = (e) => {
    e.preventDefault();

    const title = titleRef.current.value;
    const body = bodyRef.current.value;

    if (props.type === "add") {
      dispatch(addItem({ title, body }));
    }

    if (props.type === "edit") {
      dispatch(editItem({ id: param.id, title, body }));
    }
  };

  return (
    <FormContainer onSubmit={onRegister}>
      <div>
        <label htmlFor="title">제목 : </label>
        <input type="text" id="title" ref={titleRef} />
      </div>
      <div>
        <label htmlFor="body">본문 : </label>
        <input type="text" id="body" ref={bodyRef} />
      </div>

      <button type="submit">등록하기</button>
    </FormContainer>
  );
};

export default Form;
