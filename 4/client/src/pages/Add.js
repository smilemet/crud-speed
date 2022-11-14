import React from "react";

import styled from "styled-components";
import Form from "../components/Form.js";

const AddContainer = styled.main``;

const Add = () => {
  return (
    <AddContainer>
      <h1>Add</h1>

      <Form type="add" />
    </AddContainer>
  );
};

export default Add;
