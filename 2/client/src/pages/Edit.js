import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Form from "../components/Form.js";
import { getItem } from "../slices/ListSlice.js";

const Edit = () => {
  const dispatch = useDispatch();
  const Item = useSelector((state) => state.list);
  const params = useParams();

  const [data, setData] = useState();

  useEffect(() => {
    dispatch(getItem(params.id));
  }, [dispatch, params.id]);

  useEffect(() => {
    setData(Item.item);
  }, [Item]);

  return (
    <main>
      <Form type="edit" id={params.id} title={data?.title} body={data?.body} />
    </main>
  );
};

export default Edit;
