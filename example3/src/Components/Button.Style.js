import styled from "styled-components";

export const Button = styled.button`
width: 160px;
height: 40px;
background-color: ${(props) => props.backgroundColor};
float: right;
margin-right: 90px;
justify-content: space-between;
position: relative;
bottom: 20px;

&:active{
    background-color: blue;
}
`
export const Reject_Button = styled.button`

width: 70px;
height: 30px;
background-color: white;
float: right;
left: 530px;
margin-right: 100px;
justify-content: space-between;
position: relative;
bottom: 60px;

&:active{
    background-color: blue;
}
`

export const Authorize_Button = styled.button`

width: 90px;
height: 30px;
background-color: #DCDCDC;
float: right;
left: 695px;
justify-content: space-between;
position: relative;
bottom: 60px;

&:active{
    background-color: blue;
}
`


