import styled from "styled-components";

export const NavbarSection = styled.div`
  padding: 5px 0;
  overflow: hidden;
  background: #fff;
  position: relative;
  border-bottom: 1px solid #000;
`;

export const Logo = styled.div`
  width: 39%;
  float: left;
  @media (max-width: 991px) {
    width: 100%;
    float: none;
  }
`;

export const LogoText = styled.h2`
font-size: 30px;
font-weight: bold;
@media (max-width: 991px) {
  font-size: 24px;
  margin-top: 32px;
}
`;


export const Input = styled.input`
  position: absolute;
  top: 13px;
  right: 25px;
  display: none;
  $:checked ~ ul {
    display: block;
  }
$:checked ~ label {
    background: url("images/close.png") no-repeat;
    background-size: cover;
  }
`;
export const Label = styled.label`
  position: absolute;
  top: 13px;
  right: 25px;
  display: block;
  width: 15px;
  height: 15px;
  background: url("images/open.png") no-repeat;
  background-size: cover;
  padding: 20px;
  cursor: pointer;
  @media (min-width: 992px) {
    display: none;
  }
`;


export const UlList = styled.ul`
  width: 61%;
  float: left;
  list-style: none;
  padding: 0;
  padding-top: 10px;
  text-align: center;
  @media (max-width: 991px) {
    width: 100%;
    float: none;
    margin-top: 20px;
    display: ${props=>props.theState==='True'?'block':'none'};
  };
  @media (max-width: 1195px) {
    font-size:15px
`;
export const ListItem = styled.li`
  display: inline-block;
  @media (max-width: 991px) {
    display: block;
    text-align: center;
  }
`;

export const Anchor = styled.a`
  display: block;
  color: #222;
  text-decoration: none;
  padding: 10px 15px;
  font-weight: bold;
  &:hover {
    color: #eb5424;
  }
`;
export const Taggle = styled.div
`
position: absolute;
    top: 50px;
    font-size: 35px;
    right: 43px;
    transform: translateY(-50%);
    display: none;
    cursor: pointer;
    @media (max-width: 991px) {
      display: block;
    }
  
`