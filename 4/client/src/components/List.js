import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { deleteItem } from "../slices/ListSlice.js";

const ListContainer = styled.ul``;

const List = (props) => {
  const dispatch = useDispatch();

  const { data, setList } = props;

  /** 버튼 클릭 시 아이템 삭제 */
  const onDeleteItem = (e) => {
    const id = e.currentTarget.dataset.id;

    dispatch(deleteItem({ id }));

    let newList = data.filter((v) => parseInt(v.id) !== parseInt(id));
    setList(newList);
  };

  return (
    <ListContainer>
      {data ? (
        data.map((v) => {
          return (
            <li>
              <p>
                <strong>{v.title}</strong>
              </p>
              <p>{v.body}</p>
              <Link to={`/${v.id}`}>
                <button>수정하기</button>
              </Link>
              <button data-id={v.id} onClick={onDeleteItem}>
                삭제하기
              </button>
            </li>
          );
        })
      ) : (
        <>데이터가 없습니다.</>
      )}
    </ListContainer>
  );
};

List.defaultProps = {
  data: [{ id: 1, title: "제목", body: "본문" }],
};

export default List;
