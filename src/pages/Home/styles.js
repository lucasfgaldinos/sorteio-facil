import styled from "styled-components"

export const Header = styled.header`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #030637;
    border-bottom: 2px solid #3C0753;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
`

export const Title = styled.h1`
    color: #910A67;
    display: flex;
    align-items: center;
    gap: 10px;

    img {
        width: 40px;
    }
`

export const Main = styled.main`
    min-height: 100vh;
    background-color: #0B192C;
    display: flex;
    align-items: center;
    padding: 150px 20px;
    flex-direction: column;

    p {
        color: #EDEDED;
        font-size: 50px;
        animation: tracking-in-expand-fwd-top 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }

    span {
        font-size: 50px;
        color: #910A67;
        animation: tracking-in-expand-fwd-top 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }

    @keyframes tracking-in-expand-fwd-top {
        0% {
            letter-spacing: -0.5em;
            transform: translateZ(-700px) translateY(-500px);
            opacity: 0;
        }
        40% {
            opacity: 0.6;
        }
        100% {
            transform: translateZ(0) translateY(0);
            opacity: 1;
        }
    }

    @media screen and (max-width: 750px) {
        padding: 250px 20px;

        p {
            font-size: 25px;
        }

        span {
            font-size: 25px;
        }
    }
`
