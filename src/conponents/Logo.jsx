import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Logo = () => {
  return (
    <HeaderMain id="navigation">
      <H1>LOGO</H1>
      <NameLink to="/courses">Courses</NameLink>
      <NameLink to="/anouncements">Anouncements</NameLink>
      <NameLink to="/notifications">Notifications</NameLink>
      <NameLink to="/schedule">Schedule</NameLink>
    </HeaderMain>
  );
};

const H1 = styled.h1`
  color: #3a3030;
`;
const HeaderMain = styled.header`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  background-color: #956868;
  gap: 40px;
  width: 250px;
  height: 700px;
`;
const NameLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;
