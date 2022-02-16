import React from "react";
import {
  Icon,
  Social,
  SocialMediaSection,
  SocialParagraph,
  SocialSpan,
  SpanInfo,
} from "./style";
import axios from "axios";
class SocialMedia extends React.Component {
  state = {
    social: [],
  };

  async componentDidMount() {
    const { data } = await axios.get("js/data.json");
    this.setState({ social: data.social });
  }
  render() {
    const { social } = this.state;
    const mediaContent = social.map((item) => {
      return (
        <Social platform={item.id} key={item.id}>
          <Icon className={item.icon}></Icon>
          <SocialParagraph>
            <SocialSpan>{item.title}</SocialSpan>
            <SpanInfo>{item.body}</SpanInfo>
          </SocialParagraph>
        </Social>
      );
    });
    return (
      <React.Fragment>
        <SocialMediaSection>{mediaContent}</SocialMediaSection>
      </React.Fragment>
    );
  }
}

export default SocialMedia;
