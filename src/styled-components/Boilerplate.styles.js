import { createGlobalStyle } from "styled-components";

export const Boilerplate = createGlobalStyle`
*{
    font-family: 'Red Rose', sans-serif;
    
    color:--font-body;
    box-sizing:border-box;
    


}
*{
    --primary:#A02279;
    --font-body:#434343;
    --font-select: #333;
    --black: #000;
    --white: #fff;
    --footer-bg: #1d1d1e;
    --modal-bg:#4040404D;
    --wallet-outline:#CFD8DC;
    --wallet-fill:#F8F9FA;
}
h1{
    font-size: clamp(48px, 5vw, 56px);
    // To impliment clamp
    line-height:1.4;
    letter-spacing:-2%;
    font-weight: 400;
    margin:0px;
    
}
h2{
    font-size: clamp(32px, 5vw, 48px);
    line-height:1.4;
    margin:0px;
}
h3 {
    font-size: clamp(18px, 5vw, 24px);
    line-height:1.4;
    font-weight:400;
    margin:0px;
}
h4{
    font-size:18px;
    color:var(--white);
    font-weight:400;
    margin:0px;
}
h5{
    font-size:14px;

    color:var(--white);
    font-weight:400;
    margin:0px;
}
h6{
    font-size:12px;
    line-height:1.4px;
    margin:0px;
}

p{
    font-size:16px;
    line-height:1.4;
    font-weight:400;
    margin:0px;
}
span{
    font-size: clamp(48px, 5vw, 56px);
    line-height:1.4;
    letter-spacing:-2%;
    font-weight: 700;
    color: var(--primary);


}
a{
    font-size: clamp(14px, 1.6vw, 20px );
    text-decoration:none;
    color:var(--font-body)
}
`;
