import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const HeaderContainer = styled.div`
  a {
    margin-right: 1rem;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Header!</h1>
      <nav>
        <Link to="/">home</Link>
        <Link to="/add">add</Link>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
