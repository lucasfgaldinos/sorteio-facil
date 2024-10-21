import styled from "styled-components"

export const TheLinkButton = styled.a`
  padding: 20px 60px;
  font-size: 40px;
  text-decoration: none;
  margin: 100px 0 0;
  cursor: pointer;
  border: none;
  border-radius: 50px;
  color: #030637;
  background: linear-gradient(0deg, rgba(114,4,85,1) 0%, rgba(145,10,103,1) 50%);
  transition: .1s ease-in-out;
  animation: slide-in-elliptic-bottom-fwd 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

  &:hover {
    background: linear-gradient(180deg, rgba(114,4,85,1) 0%, rgba(145,10,103,1) 50%);
    box-shadow: 0 0 40px #EDEDED;
    color: #EDEDED;
  }

  &:active {
    transform: scale(.9);
  }

  @keyframes slide-in-elliptic-bottom-fwd {
    0% {
      transform: translateY(600px) rotateX(30deg) scale(0);
      transform-origin: 50% 100%;
      opacity: 0;
    }
    100% {
      transform: translateY(0) rotateX(0) scale(1);
      transform-origin: 50% -1400px;
      opacity: 1;
    }
  }

  @media screen and (max-width: 750px) {
    padding: 14px 38px;
    font-size: 18px;
  }
`
