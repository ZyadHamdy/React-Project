import React , { Component } from 'react';
import axios from 'axios'
import { WorkSection, WorkTitle, Span, WorkPart, WorkIcon, WorkPartTitle, Line, WorkPartDesc } from './style';
class Work extends Component {
    state={
works:[]
    }

  async  componentDidMount(){
        const {data} = await axios.get('js/data.json')
this.setState({works:data.works})
        
    }
    render (){
const {works}=this.state;
const WorksList = works.map((item)=>{

       return(
        
        <WorkPart first={item.id} key={item.id}>
            <WorkIcon className={item.icon_name}></WorkIcon>
            <WorkPartTitle>{item.title}</WorkPartTitle>
            <Line/>
            <WorkPartDesc>
               {item.body}
            </WorkPartDesc>
        </WorkPart>
       )
})

        return ( <React.Fragment>
            <WorkSection>
               <div className="container">
               <WorkTitle><Span>My</Span> Work</WorkTitle>
                   
                  {WorksList}
                   
               </div>
           </WorkSection>
       </React.Fragment> );
    }
}
 
export default Work;