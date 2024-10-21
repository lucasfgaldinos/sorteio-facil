import styled from "styled-components"

export const Container = styled.section`
    width: 100%;
    min-height: 100vh;
    padding: 100px 50px;
    background-color: #0B192C;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 750px){
        padding: 50px 10px;
    }
`

export const RaffleBox = styled.div`
    width: 900px;
    min-height: 600px;
    padding: 50px;
    background-color: #030637;
    border-radius: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    p.title-rafflebox {
        color: #910A67;
        font-size: 30px;
        text-align: center;
        margin-bottom: 40px;
        animation: pulsate-fwd 2s ease-in-out infinite both;

        
        @keyframes pulsate-fwd {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.1);
            }
            100% {
                transform: scale(1);
            }
        }
    }

    .checkbox-div {
        display: flex;
        align-items: center;
        margin-top: 15px;

        p {
            color: #EDEDED;
            font-size: 20px;
            margin: 0;
        }

        #checkbox-input {
            cursor: pointer;
            margin-left: 10px;
            width: 20px;
            height: 20px;
        }

        @media screen and (max-width: 750px) {
            p {
                font-size: 14px;
            }
        }
    }

    .div-link-button {
        display: flex;
    }
    
    @media screen and (max-width: 750px) {
        padding: 30px 10px;
    }
`

export const InputBox = styled.div`
    width: 80%;
    padding: 0 10px;
    display: flex;
    justify-content: center;
    border: 2px solid #720455;
    border-radius: 30px;

    textarea {
        min-width: 90%;
        max-width: 90%;
        min-height: 300px;
        max-height: 300px;
        border: 2px solid transparent;
        outline: none;
        font-size: 25px;
        font-weight: lighter;
        padding: 10px 20px;
        background-color: #0B192C;
        color: #EDEDED;
    }

    textarea::placeholder {
        color: #FF6500;
        font-size: 20px;
    }

    @media screen and (max-width: 750px) {
        width: 100%;
        
        textarea {
            width: 100px;
            font-size: 14px;
        }

        textarea::placeholder {
            font-size: 12px;
        }
    }
`

export const ResultBox = styled.div`
    width: 70%;
    border: 2px solid #1E3E62;
    border-radius: 30px;
    background-color: #0B192C;
    margin-top: 10px;
    display: none;
    flex-direction: column;
    align-items: center;
    padding: 0 20px 10px;

    p {
        color: #EDEDED;
        font-size: 19px;
        margin: 10px 0 0;
        display: flex;
        align-items: center;
    }

    p.result-paragraph {
        font-size: 60px;
        text-shadow: 0 0 25px #EDEDED;
        text-align: center;
        text-decoration: underline;
        color: #910A67;
    }
`
