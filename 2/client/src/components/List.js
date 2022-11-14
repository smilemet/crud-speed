import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { deleteItem } from "../slices/ListSlice";

const ListContainer = styled.li`
  padding: 1rem 1rem;
`;

const List = (props) => {
  const dispatch = useDispatch();

  const onDelete = (e) => {
    dispatch(deleteItem(props.id));
    let newData = props.data.filter((item) => parseInt(item.id) !== parseInt(props.id));
    props.setData(newData);
  };

  return (
    <ListContainer key={props.keys}>
      <p>{props.title}</p>
      <p>{props.body}</p>

      <Link to={`/${props.id}`}>
        <button type="button">수정</button>
      </Link>
      <button type="button" onClick={onDelete}>
        삭제
      </button>
    </ListContainer>
  );
};

List.defaultProps = {
  title: "제목",
  body: "본문",
};

export default List;
