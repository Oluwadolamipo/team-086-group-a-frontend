import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';
import ReactDOM from 'react-dom';
import '../index.css';
import Button from '../Common/Button.component/Button.jsx'
// import Button from 'react-bootstrap/Button'
import {Nav, Navbar, NavItem, NavDropdown} from 'react-bootstrap'
import Row from 'react-bootstrap/row'
import Form from 'react-bootstrap/form'
import Container from 'react-bootstrap/container'
import Col from 'react-bootstrap/col'
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'
// import NavDropdown from 'react-bootstrap/NavDropdown'
// // import Col from 'react-bootstrap/Col'
// import NavLink from '../Common/NavLink.component/NavLink.jsx'
import Input from '../Common/Input.component/Input.jsx'
import Label from '../Common/Label.component/Label.jsx'
import Image from '../Common/Image.component/Image.jsx'
// import Header from '/src/Common/Header'


const btn_style = {
    "color" : "#23CF43",
}
class ContactPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            disabled: false,
            messageSent : null,

        }
    }

    render (){
        return(
            <Container fluid>
                <Row>
                    <div>
                       Nav Bar
                    </div>
                    <div>
                        Image
                    </div>
                </Row>
                <Row>
                    <div>
                        <div>Contact</div>
                        <div>fill form</div>
                    </div>
                    <div>
                        <div>box 1</div>
                        <div>box 2</div>
                        <div> box 3</div>
                    </div>
                </Row>
                <Row>
                    <div>
                        <div>map</div>
                        <div>
                            <Form id="" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="full-name">Name</label>
                                    <Input id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <Input id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <Input id="subject" name="subject" type="text" value={this.state.subject} onChange={this.handleChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <Input id="message" name="message" as="textarea" rows="3" value={this.state.name} onChange={this.handleChange}/>
                                </div>

                                <Button className="d-inline-block" type="submit" disabled="true" color={btn_style}>Send</Button> 
                            </Form>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div>logo</div>
                    <div>Quick links</div>
                    <div>Opening Hours</div>
                    <div>Contact Info</div>
                    <div>Subscribe</div>
                </Row>
                <Row>
                    <div>CopyRight</div>
                    <div>Privacy/TS/Language</div>
                </Row>
            <Input>

            </Input>
            <Button color={btn_style}>Submit</Button> 
            </Container>
        )
    }


}

export default ContactPage;
