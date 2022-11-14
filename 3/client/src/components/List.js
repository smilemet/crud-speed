import React from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";

import styled from "styled-components";
import { deleteItem } from "../slices/ListSlice";

const ListContainer = styled.ul`
  li {
    margin-bottom: 1rem;
  }
`;

const List = (props) => {
  const { list, setList } = props;

  const dispatch = useDispatch();

  const onDeleteItem = (e) => {
    const id = e.currentTarget.dataset.id;
    dispatch(deleteItem({ id }));
    let newList = list.filter((v) => v.id !== id);
    setList(newList);
  };

  return (
    <ListContainer>
      {list ? (
        list.map((v) => {
          return (
            <>
              <li>
                <p>{v.title}</p>
                <span>{v.body}</span>

                <Link to={`/${v.id}`}>
                  <button>수정하기</button>
                </Link>

                <button onClick={onDeleteItem} data-id={v.id}>
                  삭제하기
                </button>
              </li>
            </>
          );
        })
      ) : (
        <>데이터가 없습니다.</>
      )}
    </ListContainer>
  );
};

export default List;
