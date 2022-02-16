import React from 'react';
import { AboutInfo, AboutSection, Anchor, InfoDesc, InfoDir, InfoTitle, Span } from './style';
const About = () => {
    return ( <React.Fragment>
                <AboutSection>
            <div className="container">
                <AboutInfo>
                    <InfoTitle><Span>This is</Span> Me</InfoTitle>
                    <InfoDir>Creative Director</InfoDir>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Anchor href="#">explicabo</Anchor> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                </AboutInfo>
            </div>
        </AboutSection>
    </React.Fragment> );
}
 
export default About;