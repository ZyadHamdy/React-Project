import React , {useState,useEffect} from "react";
import {
  Bar,
  BarPerc,
  BarTitle,
  Profilee,
  Parent,
  ProfileItems,
  ProfileList,
  ProfileSkillsSection,
  ProfileTitle,
  ProfileTitleSpan,
  Skills,
  SkillsDesc,
  SkillsTitle,
  Span,
  WebSpan,
  SkillsTitleSpan,
  ParentSpan,
} from "./style";
import axios from "axios";

const Profile = () => {
    const [Skill , setSkills] =useState([])
    useEffect(()=>{
        axios.get('js/data.json').then(res=>setSkills(res.data.skills))
    },[])

const Bars = Skill.map(s=>{
    
    return(
        <Bar key={s.id}>
        <BarTitle>{s.name}</BarTitle>
        <BarPerc>{s.percent}</BarPerc>
        <Parent>
          <ParentSpan sp={s.sp}></ParentSpan>
        </Parent>
      </Bar>
    )
})
  return (
    <React.Fragment>
      <ProfileSkillsSection>
        <div className="container">
          <Profilee>
            <ProfileTitle>
              <ProfileTitleSpan>My </ProfileTitleSpan>Profile
            </ProfileTitle>
            <ProfileList>
              <ProfileItems>
                <Span>Name</Span>
                Zyad Hamdy
              </ProfileItems>
              <ProfileItems>
                <Span>Birthday</Span>
                6/10/2000
              </ProfileItems>
              <ProfileItems>
                <Span>Address</Span>
                Bani Sweif
              </ProfileItems>
              <ProfileItems>
                <Span>Phone</Span>
                01225039394
              </ProfileItems>
              <ProfileItems>
                <Span>Email</Span>
                zyadzoza855@gmail.com
              </ProfileItems>
              <ProfileItems>
                <Span>Website</Span>
                <WebSpan>www.google.com</WebSpan>
              </ProfileItems>
            </ProfileList>
          </Profilee>

          <Skills>
            <SkillsTitle>
              Some <SkillsTitleSpan>skills</SkillsTitleSpan>
            </SkillsTitle>
            <SkillsDesc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              praesentium blanditiis esse cupiditate, omnis similique.
            </SkillsDesc>
        {Bars}
    
          </Skills>
        </div>
      </ProfileSkillsSection>
    </React.Fragment>
  );
};

export default Profile;
