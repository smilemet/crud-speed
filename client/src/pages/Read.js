import React, { useEffect } from "react";

import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getList } from "../slices/ListSlice";

const Read = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list);

  /** 페이지 마운트 시 list 아이템 가져오기 */
  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);

  return (
    <div>
      <h1>READ</h1>

      <Link to="/add">
        <Button variant="primary" type="button">
          새 글 추가하기
        </Button>
      </Link>

      <ListGroup>
        {list.data ? (
          list.data.map((v) => {
            return (
              <ListGroup.Item key={v.title}>
                <p>{v.title}</p>
                <p>{v.body}</p>
              </ListGroup.Item>
            );
          })
        ) : (
          <ListGroup.Item>리스트가 없습니다.</ListGroup.Item>
        )}
      </ListGroup>
    </div>
  );
};

export default Read;
