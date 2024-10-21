import styled from "styled-components"

export const TheFooter = styled.footer`
    width: 100%;
    min-height: 30vh;
    background-color: #000000;
    color: #EDEDED;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    font-size: 20px;

    span {
        color: #910A67;
        margin-bottom: 20px;
    }

    .contacts {
        display: flex;
        flex-direction: column;
        align-items: center;

        p {
            text-align: center;
        }

        a {
            width: 50px;
            height: 50px;
            transition: .1s;
        }

        a:hover {
            transform: scale(1.3);
        }
    }

    .contacts img {
        width: 100%;
        height: 100%;
    }

    .contacts img:hover {
        filter: drop-shadow(0 0 10px #910A67);
    }

    .final {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        hr {
            width: 80%;
            margin: 10px 0;
            opacity: .2;
        }

        p {
            text-align: center;
        }

        a {
            color: #910A67;
            margin-left: 10px;
        }

        a:hover {
            filter: drop-shadow(0 0 10px #910A67);
        }
    }
`
