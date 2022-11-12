import { createGlobalStyle } from "styled-components";

export const Boilerplate = createGlobalStyle`
*{
    font-family: 'Red Rose', sans-serif;
    
    color:--font-body;
    


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
    font-size: 56px;
    // To impliment clamp
    line-height:1.4;
    letter-spacing:-2%;
    font-weight: 400;
    
}
h2{
    font-size:48px;
    line-height:1.4;
}
h3 {
    font-size:24px;
    line-height:1.4;
    font-weight:400
}
h4{
    font-size:18px;
    color:var(--white);
    font-weight:400;
}
h5{
    font-size:14px;

    color:var(--white);
    font-weight:400;

}
h6{
    font-size:12px;
    line-height:1.4px;
}

p{
    font-size:16px;
    line-height:1.4;
    font-weight:400;
}
span{
    font-size: 56px;
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
