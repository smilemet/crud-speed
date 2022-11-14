import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { getList } from "../slices/ListSlice.js";
import List from "../components/List.js";
import { useSelector } from "react-redux";

const MainContainer = styled.main``;

const Main = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list);
  const [data, setData] = useState();

  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);

  useEffect(() => {
    setData(list?.list);
  }, [list]);

  return (
    <MainContainer>
      <h1>Hello?</h1>
      <ul>
        {data ? (
          data.map((item) => {
            return (
              <>
                <List
                  keys={item.title + item.id}
                  title={item.title}
                  body={item.body}
                  id={item.id}
                  data={data}
                  setData={setData}
                />
              </>
            );
          })
        ) : (
          <List />
        )}
      </ul>
    </MainContainer>
  );
};

export default Main;
