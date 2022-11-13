import React from "react";
import { useParams } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useDispatch } from "react-redux";
import { addList } from "../slices/ListSlice";

const Edit = () => {
  const dispatch = useDispatch();
  const params = useParams();

  console.log(params);

  const onAddList = () => {
    dispatch(addList());
  };

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formGroupTitle" form>
          <Form.Label>제목</Form.Label>
          <Form.Control type="text" placeholder="제목 입력" />
          <Form.Label>본문</Form.Label>
          <Form.Control type="text" placeholder="본문 입력" />

          <Button variant="primary" type="button">
            글 등록하기
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Edit;
