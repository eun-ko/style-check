import React from 'react';
import styled from "styled-components";
import Typing from 'react-typing-animation';

export default function Intro({history}) {
  const handleStartButton=()=>{
    history.push('/question');
  }
 
  return (
    <Wrapper>
      <TypingArea>
      <Typing speed={30}>
      <Title>2020 인간과 종교 
      <br/> 나의 스타일 조사
      </Title>
      <Typing.Delay ms={800} />
      <WarningIcon>⚠️</WarningIcon>
      <WarningText>
        다시 선택할 수 없으니 <br/>신중히 골라주세요!
      </WarningText>
      </Typing>
      </TypingArea>
    <StartButton onClick={handleStartButton} >시작</StartButton>
    
    </Wrapper>
  );
}
const TypingArea=styled.div`
height:20rem;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const WarningIcon=styled.div`
display:flex;
justify-content:center;
margin-bottom:2rem;
font-size:2.5rem;`;

const WarningText=styled.p`
text-align:center;
font-size:1.5rem;
`;
const Title=styled.p`
text-align:center;
font-size:2rem;
margin-bottom:3rem;

`;
const Wrapper=styled.div`

margin-top:10rem;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
font-family: 'Black Han Sans', sans-serif;

`;
const StartButton = styled.div`
  width: 9rem;
  height: 2.5rem;
  color: #00462A;
  font-size: 2rem;
  border: 5px solid #00462A;
  border-radius:1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  cursor: pointer;
  animation: fadeInUp 1s ;
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translate3d(0, 100%, 0)
    }
    100% {
      opacity: 1;
      transform: none
    }
  }
`;