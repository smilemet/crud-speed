import React, { useRef } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useDispatch } from "react-redux";
import { addList } from "../slices/ListSlice";

const Add = () => {
  const titleRef = useRef();
  const bodyRef = useRef();

  const dispatch = useDispatch();

  const onAddList = (e) => {
    e.preventDefault();

    const title = titleRef.current.value;
    const body = bodyRef.current.value;

    dispatch(addList({ title, body }));

    window.location.href = "http://localhost:3000/";
  };

  return (
    <div>
      <Form onSubmit={onAddList}>
        <Form.Group className="mb-3" controlId="formGroupTitle" form>
          <Form.Label>제목</Form.Label>
          <Form.Control type="text" placeholder="제목 입력" ref={titleRef} />
          <Form.Label>본문</Form.Label>
          <Form.Control type="text" placeholder="본문 입력" ref={bodyRef} />

          <Button variant="primary" type="submit">
            글 등록하기
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Add;
