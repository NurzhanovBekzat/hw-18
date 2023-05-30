import React from "react";
import { Link, Outlet } from "react-router-dom";
import { styled } from "styled-components";

export const Courses = () => {
  return (
    <>
      <Container>
        <LinkNameLogo to="material">Materials</LinkNameLogo>
        <LinkNameLogo to="student">Students</LinkNameLogo>
        <LinkNameLogo to="rating">Ratings</LinkNameLogo>
      </Container>
      <Outlet />
    </>
  );
};
const LinkNameLogo = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

const Container = styled.div`
  width: 81.4%;
  height: 100px;
  background-color: #682be2;
  color: #fff;

  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  margin-top: -700px;
  margin-right: 1px;
`;
