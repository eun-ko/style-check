import React from 'react';
import styled from "styled-components";

export default function NotFound() {

  return (
    <Wrapper>
      <WarningIcon>⚠️</WarningIcon>
      존재하지 않는 페이지 입니다.
    </Wrapper>
  );
}

const Wrapper=styled.div`
  height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  font-family: 'Black Han Sans', sans-serif;
`;

const WarningIcon=styled.div`
  display:flex;
  justify-content:center;
  margin-bottom:2rem;
  font-size:2.5rem;
`;
