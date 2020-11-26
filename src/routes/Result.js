import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom"

import {resultData} from "../../src/components/data/questiondata";

export default function Result(props) {

  const {dSum,iSum,sSum,cSum}=props.location.state;
  
  const arr=[dSum,iSum,sSum,cSum];
  
  const dArr=[resultData[0].exp,resultData[0].hate,resultData[0].todo];
  const iArr=[resultData[1].exp,resultData[1].hate,resultData[1].todo];
  const sArr=[resultData[2].exp,resultData[2].hate,resultData[2].todo];
  const cArr=[resultData[3].exp,resultData[3].hate,resultData[3].todo];
  
  const maxSum=Math.max(...arr);
  
  const Content=()=>{
    if(maxSum===dSum) return getTypeInformation(dArr)
    else if(maxSum===iSum) return getTypeInformation(iArr)
    else if(maxSum===sSum) return getTypeInformation(sArr)
    else return getTypeInformation(cArr)
  }

  const getTypeInformation=(arr)=>{
    return(
    <>
    <TypeInfo>
      <Label>유형 설명</Label>
      {arr[0]}
    </TypeInfo>
    <TypeInfo>
      <Label>싫어하는 것</Label>
      {arr[1]}
    </TypeInfo>
    <TypeInfo>
      <Label>발전시켜야하는 것</Label>
      {arr[2]}
    </TypeInfo>
    </>
    )
  }

return (
<Wrapper>
<Content/>
<SLink to="/">
<RestartButton>다시 하기</RestartButton>
</SLink>
</Wrapper>)
}

const Wrapper=styled.div`
margin-top:10rem;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;

const SLink=styled(Link)`
text-decoration:none;
`
const TypeInfo=styled.div`
width:90%;
display:flex;
flex-direction:column;
font-family: 'Do Hyeon', sans-serif;
margin:0 3rem;
margin-bottom:2rem;

`;
const Label=styled.div`
margin:0;
margin-bottom:0.6rem;
font-family: 'Black Han Sans', sans-serif;
`;

const RestartButton = styled.div`
  width: 6rem;
  height: 2rem;
  color: #00462A;
  font-size: 1.3rem;
  border: 5px solid #00462A;
  border-radius:1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  cursor: pointer;
  animation: bounceIn 3s ease-in-out infinite ;
  @keyframes bounceIn {
    0%, 100%, 20%, 40%, 60%, 80% {
      transition-timing-function: cubic-bezier(0.215, .61, .355, 1)
    }
    0% {
      opacity: 0;
      transform: scale3d(.3, .3, .3)
    }
    20% {
      transform: scale3d(1.1, 1.1, 1.1)
    }
    40% {
      transform: scale3d(.9, .9, .9)
    }
    60% {
      opacity: 1;
      transform: scale3d(1.03, 1.03, 1.03)
    }
    80% {
    
      transform: scale3d(.97, .97, .97)
    }
    100% {
      opacity: 1;
      transform: scale3d(1, 1, 1)
    }
  }
`;