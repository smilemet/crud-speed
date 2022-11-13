import React, { useEffect, useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useDispatch, useSelector } from "react-redux";
import { editList, getItem } from "../slices/ListSlice";
import { useParams } from "react-router-dom";

const Edit = () => {
  const titleRef = useRef();
  const bodyRef = useRef();
  const dispatch = useDispatch();
  const params = useParams();

  const list = useSelector((state) => state.list);
  const [data, setData] = useState();

  /** 페이지 마운트 시 list 아이템 가져오기 */
  useEffect(() => {
    dispatch(getItem({ id: params.id }));
  }, [dispatch, params.id]);

  useEffect(() => {
    setData(list?.data);
  }, [list]);

  const onAddList = (e) => {
    e.preventDefault();

    const title = titleRef.current.value;
    const body = bodyRef.current.value;

    dispatch(editList({ id: params.id, title, body }));

    window.location.href = "http://localhost:3000/";
  };

  return (
    <div>
      <Form onSubmit={onAddList}>
        <Form.Group className="mb-3" controlId="formGroupTitle">
          <Form.Label>제목</Form.Label>
          <Form.Control type="text" placeholder="제목 입력" ref={titleRef} defaultValue={data?.title} />
          <Form.Label>본문</Form.Label>
          <Form.Control type="text" placeholder="본문 입력" ref={bodyRef} defaultValue={data?.body} />

          <Button variant="primary" type="submit">
            글 등록하기
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Edit;
