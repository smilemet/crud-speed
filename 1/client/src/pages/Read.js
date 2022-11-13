import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

import { useDispatch, useSelector } from "react-redux";
import { deleteList } from "../slices/ListSlice.js";

import { getList } from "../slices/ListSlice.js";

const Read = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list);
  const [posts, setPosts] = useState();

  /** 페이지 마운트 시 list 아이템 가져오기 */
  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);

  /** 페이지 마운트 시 list 아이템 입력하기 */
  useEffect(() => {
    setPosts(list?.data);
  }, [list]);

  /** 아이템 삭제 */
  const onRomoveItem = (e) => {
    const itemId = e.currentTarget.dataset.id;
    dispatch(deleteList({ id: itemId }));

    let updatedPosts = posts.filter((v) => v.id !== parseInt(itemId));
    setPosts(updatedPosts);
  };

  return (
    <div>
      <h1>READ</h1>

      <Link to="/add">
        <Button variant="primary" type="button">
          새 글 추가하기
        </Button>
      </Link>

      <ListGroup>
        {posts ? (
          posts.map((v) => {
            return (
              <Link to={"/" + v.id} key={v.title + v.id} data-id={v.id}>
                <ListGroup.Item>
                  <div>
                    <p>{v.title}</p>
                    <p>{v.body}</p>
                  </div>
                  <Button variant="danger" onClick={onRomoveItem}>
                    Danger
                  </Button>
                </ListGroup.Item>
              </Link>
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
