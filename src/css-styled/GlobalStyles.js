import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    .top-repeat {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 3.75rem;
    }

    span {
        color: #fa0368;
        font-size: 1rem;
        font-weight: 500;
        padding-bottom: .7rem;
        @media screen and (max-width: 768px) {
            font-size: 1.9rem;
        }
    }
    h2 {
        font-size: 2.18rem;
        color: white;
        font-weight: 700;
        @media screen and (max-width: 768px) {
            font-size: 4rem;
        }
    }

    a {
        text-decoration: none;
    }
`;