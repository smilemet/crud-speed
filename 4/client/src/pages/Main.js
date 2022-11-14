import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { getList } from "../slices/ListSlice.js";
import List from "../components/List.js";
import { Link } from "react-router-dom";

const MainContainer = styled.main``;

const Main = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.list);

  const [list, setList] = useState();

  /** 페이지 마운트 시 리스트 데이터 가져오기 */
  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);

  useEffect(() => {
    setList(data?.list);
  }, [data]);

  return (
    <MainContainer>
      <h1>Main?</h1>

      <Link to="/add">
        <button>새 글 추가하기</button>
      </Link>

      <List data={list} setList={setList} />
    </MainContainer>
  );
};

export default Main;
