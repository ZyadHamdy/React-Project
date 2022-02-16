import React from 'react';
import { HomeInfo, HomeInformation, HomeSection, HomeTitle, HomeDesc, HomeBtn } from './style';
const Home = () => {
    return ( <React.Fragment>
        <HomeSection>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>Zyad Hamdy</HomeTitle>
                    <HomeInfo>Creative Director</HomeInfo>
                    <HomeDesc>
                        Iam a professional <span>UX Designer</span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </HomeDesc>
                    <HomeBtn>Let's Begin</HomeBtn>
                </HomeInformation>
            </div>
        </HomeSection>
        
    </React.Fragment> );
}
 
export default Home;