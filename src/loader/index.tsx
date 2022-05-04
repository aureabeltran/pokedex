import * as React from "react";
import styled from "styled-components";
import { keyframes } from 'styled-components';


// styles
const LoaderStyles = styled.div` 
  color: #232129;
  fontFamily: -apple-system, Roboto, sans-serif, serif;
  background: rgba(0,0,0,.2);
  position: fixed;
  top: 0;
  left:0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ShakeAnimation = keyframes`
    0 { transform: translate(0, 0) rotate(0); }
    20% { transform: translate(-10px, 0) rotate(-20deg); }
    30% { transform: translate(10px, 0) rotate(20deg); }
    50% { transform: translate(-10px, 0) rotate(-10deg); }
    60% { transform: translate(10px, 0) rotate(10deg); }
    100% { transform: translate(0, 0) rotate(0); }
`
const BlinkAnimation = keyframes`
    from { background: #eee;}
    to { background: #e74c3c; }
`
const ToggleAnimation = keyframes`
    from { opacity:1}
    to { opacity: 0 }
`

const PokeballDiv = styled.div` 
    position: relative;
    width: 200px;
    height: 200px;
    background: #fff;
    border: 10px solid #000;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: inset -10px 10px 0 10px #ccc;
    animation: ${ShakeAnimation} 1.25s cubic-bezier(.36,.07,.19,.97) infinite;
    &::before,
    &::after {
        content:"";
        position: absolute;
    }
    &::before {
        background: red;
        width: 100%;
        height: 50%;
    }
    &::after {
        top: calc(50% - 10px);
        width: 100%;
        height: 20px;
        background: #000;
    }
`;

const PokeballButton = styled.div` 
    position: absolute;
    top: 70px;
    left: 70px;
    width: 40px;
    height: 40px;
    background: #7f8c8d;
    border: 10px solid #fff;
    border-radius: 50%;
    z-index: 10;
    box-shadow: 0 0 0 10px black;
    animation: ${BlinkAnimation} 1.5s infinite;
`;

const TitleLoader = styled.div`
    color: black;
    font-size: 40px;
    margin-bottom: 40px;
    animation: ${ToggleAnimation} 1s infinite;
`;


// markup
const Loader = () => {
  return (
    <LoaderStyles>
        <TitleLoader>Loading...</TitleLoader>
        <PokeballDiv>
            <PokeballButton></PokeballButton>
        </PokeballDiv>
    </LoaderStyles>
  )
}

export default Loader
