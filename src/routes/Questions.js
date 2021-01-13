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
        <Question onClick={calculateDSum}>{question.D}</Question>
        <Question onClick={calculateISum}>{question.I}</Question>
        <Question onClick={calculateSSum}>{question.S}</Question>
        <Question onClick={calculateCSum}>{question.C}</Question>
      </>
    )
  }

  return( 
    <>
      {!isLoading &&
      <>
        <ProgressBar step={questionID}/>
        <Typing speed={10}>
          <TypingArea>
            나를 <span style={{backgroundColor:' #0B3F78',color:'white'}}>가장 잘</span> 설명한다고 생각되는<br/> 표현을 하나씩 골라주세요
          </TypingArea>
        </Typing>
        <QuestionWrapper>
          {questionData.map((question)=>
          {
            return question.id===questionID ? <HandleQuestions {...{question}} key={question.id}/> : <div/>
          })
          }
        </QuestionWrapper>
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
            cSum:cSum
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

const ProgressBar=styled.div`
  width: ${(props) => (props.step ? (props.step/24)*100 : 0)}%;
  height: 0.8rem;
  background-color: #0B3F78;
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

const QuestionWrapper=styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  align-items:center;
`;

const Question=styled.div`
  font-size:1rem;
  border:0.2rem dashed #0B3F78;
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
  &:nth-child(2) {
    animation-delay:0.4s;
  }
  &:nth-child(3) {
    animation-delay: 0.8s;
  }
  &:nth-child(4) {
    animation-delay: 1.2s;
  }
`;

const TypingArea=styled.p`
  font-size:1.5rem;
  text-align:center;
  margin: 5rem 0;
  height:6rem;
`;

const ResultButton = styled.div`
  padding:0.2rem;
  width: 9rem;
  height: 2rem;
  color: #0B3F78;
  font-size: 1.7rem;
  border: 5px solid #0B3F78;
  border-radius:1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;
  cursor: pointer;
  animation: startblinker 0.7s infinite;
  @keyframes startblinker {
    0% {
     
      color: #0B3F78;
      border: 5px solid #0B3F78;
    }
    50% {
      color: white;
      background-color: #0B3F78;
    }
    100% {
      color: #0B3F78;
      border: 5px solid #0B3F78;
    }
  }
`;