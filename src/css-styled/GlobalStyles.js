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
    }
    h2 {
        font-size: 2.18rem;
        color: white;
        font-weight: 700;
    }

    a {
        text-decoration: none;
    }
`;