// HOOKS
import axios from "axios";
import React , { useState , useEffect } from "react";
import { BoxImage, Image, Overlay, PortfolioItem, PortfolioList, PortfolioSection, PortfolioTitle, Span, SpanOverlay } from "./style";
const Portfolio = () => {
    const [Images , setImage] = useState([])
    useEffect(  ()=>{
  axios.get('js/data.json').then(res=>{setImage(res.data.portfolio)})

    } , [])

const PortfolioImages = Images.map((image)=>{
  return(
    <BoxImage key={image.id}>
    <Image src={image.image}/>
    <Overlay>
      <SpanOverlay>Show Image</SpanOverlay>
    </Overlay>
  </BoxImage>
  )
})
  return (
    <React.Fragment>
      <PortfolioSection>
        <PortfolioTitle>
          <Span>My</Span> Portfolio
        </PortfolioTitle>
        <PortfolioList>
          <PortfolioItem active>All</PortfolioItem>
          <PortfolioItem>HTML</PortfolioItem>
          <PortfolioItem>Photoshop</PortfolioItem>
          <PortfolioItem>Wordpress</PortfolioItem>
          <PortfolioItem>Mobile</PortfolioItem>
        </PortfolioList>

        <div className="box">
       {PortfolioImages}
        </div>
      </PortfolioSection>
    </React.Fragment>
  );
};

export default Portfolio;
