import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getItem } from "../slices/ListSlice.js";

import styled from "styled-components";
import Form from "../components/Form";

const EditContainer = styled.div``;

const Edit = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const data = useSelector((state) => state.list);
  const [item, setItem] = useState();

  /** 아이템 하나의 정보 가져오기 */
  useEffect(() => {
    dispatch(getItem({ id: params.id }));
  }, [dispatch, params.id]);

  useEffect(() => {
    setItem(data?.item);
    console.log(data);
  }, [data]);

  return (
    <EditContainer>
      <h1>Edit</h1>

      <Form type="edit" edit={{ id: params.id, title: item?.title, body: item?.body }} />
    </EditContainer>
  );
};

export default Edit;
