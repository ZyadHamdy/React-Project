import styled from "styled-components";

export const SocialMediaSection = styled.div`
  height: auto;
  overflow: hidden;
  width: 100%;
`;

export const Social = styled.div`
  width: 33.33%;
  float: left;
  box-sizing: border-box;
  padding: 100px 0 100px 60px;
  background: ${(props) =>
    props.platform === 1
      ? "#3b5998"
      : props.platform === 2
      ? "#498cbf"
      : props.platform === 3
      ? "#cc2127"
      : " "};
  @media (max-width: 991px) {
    width: 100%;
    float: none;
  } ;
`;

export const Icon = styled.i`
  width: 50px;
  height: 50px;
  background: #fff;
  text-align: center;
  line-height: 50px;
  color: #888;
  float: left;
  margin-right: 10px;
  margin-top: 26px;
`;

export const SocialParagraph = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 20px;
  color: #fff;
`;

export const SocialSpan = styled.span`
  display: block;
  margin-bottom: 8px;
`;

export const SpanInfo = styled.span`
  font-weight: normal;
  float: left;
`;
