import React from 'react';
import Footer from '../Footer/footer';
import { DropSection, DropTitle, Form, FormInput, InputEmail, InputExp, InputSubmit, InputText, Span, Textarea } from './style';
const Contact = () => {
    
    return ( <React.Fragment>
                <DropSection>
            <div className="container">
                <DropTitle><Span>Drop </Span>Me A line</DropTitle>
                <Form action="">
                    <FormInput>
                        <InputText type="text" placeholder="Your Name" />
                        <InputEmail type="email" placeholder="Your Email"/>
                    </FormInput>
                    <InputExp type="text" class="sub" placeholder="Your Subject"/>
                    <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
                    <InputSubmit type="submit" value="Send Message" />
                </Form>
            </div>
        </DropSection>
        <Footer/>
    </React.Fragment> );
}
 
export default Contact;