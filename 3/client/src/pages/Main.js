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

  /** 마운트 시 목록 가져오기 */
  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);

  /** 데이터 넣기 */
  useEffect(() => {
    setList(data?.list);
  }, [data]);

  return (
    <MainContainer>
      <Link to="/add">
        <button>등록하기</button>
      </Link>

      <List list={list} setList={setList} />
    </MainContainer>
  );
};

export default Main;
