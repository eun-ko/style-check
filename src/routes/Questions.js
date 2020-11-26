import React,{useState} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom"
import Typing from 'react-typing-animation';

import {questionData} from "../components/data/questiondata";

export default function Questions() {

  const [questionID,setQuestionID]=useState(0);
  const [dSum,setDSum]=useState(0);
  const [iSum,setISum]=useState(0);
  const [sSum,setSSum]=useState(0);
  const [cSum,setCSum]=useState(0);
  const [isLoading,setLoading]=useState(false);

  const HandleQuestions=({question})=>{

    if (questionID===23) setLoading(true);
    
    const calculateDSum=()=>{
      setDSum((dSum)+(question.Dvalue));
      setQuestionID((questionID+1));

    }
    const calculateISum=()=>{
      setISum((iSum)+(question.Ivalue));
      setQuestionID((questionID)+1);

    }
    const calculateSSum=()=>{
      setSSum((sSum)+(question.Svalue));
      setQuestionID((questionID)+1);

    }
    const calculateCSum=()=>{

      setCSum((cSum)+(question.Cvalue));
      setQuestionID((questionID)+1);

    }
    return(
      <>
      <Option1 onClick={calculateDSum}>{question.D}</Option1>
      <Option2 onClick={calculateISum}>{question.I}</Option2>
      <Option3 onClick={calculateSSum}>{question.S}</Option3>
      <Option4 onClick={calculateCSum}>{question.C}</Option4>
      </>
    )
  }

  return( 
    <>
    {!isLoading &&
    <>
    <ProgressBarWrapper><ProgressBar step={questionID}/></ProgressBarWrapper>
    <Typing speed={10}>
    <TypingArea>
      나를 <span style={{backgroundColor:'#00462A',color:'white'}}>가장 잘</span> 설명한다고 생각되는<br/> 표현을 하나씩 골라주세요
    </TypingArea>
    </Typing>
    <OptionWrapper>
    {questionData.map((question)=>
    {
      return question.id===questionID ? <HandleQuestions {...{question}} key={question.id}/>:<div/>
    })
    }
    </OptionWrapper>
    </>
}
  {isLoading && 
  <Typing speed={80}>
    <Loading>
      결과 분석중...
      <Typing.Reset count={1} delay={1300} />
      <SLink to={{
        pathname:'/result',
        state:{
         dSum:dSum,
         iSum:iSum,
         sSum:sSum,
         cSum,cSum
        }
      }}>
      <ResultButton>결과 확인</ResultButton>
      </SLink>
    </Loading>
    </Typing>
    }
  
  </>
  )
}
const ProgressBarWrapper = styled.div`
	width: 100%;
	max-width: 37.5rem;
	background-color: white;
`;

const ProgressBar=styled.div`
width: ${(props) => (props.step ? (props.step/24)*100 : 0)}%;
height: 0.5rem;
background-color: #00462A;
`;

const SLink=styled(Link)`
text-decoration:none;
`;

const Loading=styled.p`
font-size:2rem;
text-align:center;
margin-top:10rem;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;

const OptionWrapper=styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center;
align-items:center;
`;

const Option1=styled.div`
font-size:1rem;
border:0.2rem dashed #00462A;
border-radius:1rem;
display:flex;
justify-content:center;
align-items:center;
width:7rem;
height:4rem;
margin:1.5rem;
animation: fadeIn 0.3s ;
@keyframes fadeIn {
  0% {
    opacity: 0
  }
  100% {
    opacity: 1
  }
}

@media screen and (min-width: 769px) {
  margin:3rem;
}
`;

const Option2=styled.div`
font-size:1rem;
border:0.2rem dashed #00462A;
border-radius:1rem;
display:flex;
justify-content:center;
align-items:center;
width:7rem;
height:4rem;
margin:1.5rem;
animation: fadeIn 0.3s ;
animation-delay:0.4s;
@keyframes fadeIn {
  0% {
    opacity: 0
  }
  100% {
    opacity: 1
  }
}
@media screen and (min-width: 769px) {
  margin:3rem;
}
`;

const Option3=styled.div`
font-size:1rem;
border:0.2rem dashed #00462A;
border-radius:1rem;
display:flex;
justify-content:center;
align-items:center;
width:7rem;
height:4rem;
margin:1.5rem;
animation: fadeIn 0.3s ;
animation-delay:0.8s;
@keyframes fadeIn {
  0% {
    opacity: 0
  }
  100% {
    opacity: 1
  }
}
@media screen and (min-width: 769px) {
  margin:3rem;
}
`;

const Option4=styled.div`
font-size:1rem;
border:0.2rem dashed #00462A;
border-radius:1rem;
display:flex;
justify-content:center;
align-items:center;
width:7rem;
height:4rem;
margin:1.5rem;
animation: fadeIn 0.3s ;
animation-delay:1.2s;
@keyframes fadeIn {
  0% {
    opacity: 0
  }
  100% {
    opacity: 1
  }
}
@media screen and (min-width: 769px) {
  margin:3rem;
}
`;

const TypingArea=styled.p`
font-size:1.5rem;
text-align:center;
margin-top:2rem;
margin-bottom:3rem;
height:6rem;
`;

const ResultButton = styled.div`
  padding:0.2rem;
  width: 9rem;
  height: 2rem;
  color: #00462A;
  font-size: 1.7rem;
  border: 5px solid #00462A;
  border-radius:1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;
  cursor: pointer;
  animation: startblinker 0.7s infinite;
  @keyframes startblinker {
    0% {
     
      color: #00462A;
      border: 5px solid #00462A;
    }
    50% {
      color: white;
      background-color: #00462A;
    }
    100% {
      color: #00462A;
      border: 5px solid #00462A;
    }
  }
`;