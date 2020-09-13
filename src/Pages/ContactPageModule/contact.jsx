import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';
import ReactDOM from 'react-dom';
import '../../index.css';
// import Button from '../../Common/Button.component/Button.jsx';
import Button from 'react-bootstrap/Button'
import {Nav, Navbar, NavItem, NavDropdown} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'
// import NavDropdown from 'react-bootstrap/NavDropdown'
// // import Col from 'react-bootstrap/Col'
import NavLink from '../../Common/NavLink.component/NavLink.jsx';
import Input from '../../Common/Input.component/Input.jsx';
import Label from '../../Common/Label.component/Label.jsx';
// import Image from '../../Common/Image.component/Image.jsx';
import Header from '../../Common/Header.Component/Header.jsx';
import Footer from '../../Common/Footer.component/Footer.jsx';
// import Footer from  '/src/Common/'
import Style from './contact.module.css';
import Img from '../../Asset/com.jpg';
import MapContainer from '../../Components/MapComponent/Map';



// import { 
//     BrowserRouter as Router, 
//     Route, 
//     Switch, 
//     Link, 
//     Redirect 
//   } from "react-router-dom";
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
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (e) => {
        console.log(e)
        const target = e.target;
        const value = target.type === "checkBox" ? target.checked : target.value
        const name = target.name

        this.setState({
            [name] : value,
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            disabled : true,
        })
    }


    render (){
        const location = {
            address: '1600 Amphitheatre Parkway, Mountain View, california.',
            lat: 37.42216,
            lng: -122.08427,
          }

        return(

            <div className={Style.bg}>
            <div className={Style.images}>
                <h3>WELCOME</h3>
                {/* <img className={Style.comImg} src={Img} /> */}
            </div>

            <Container fluid>
                <Container>


                    <Row className={Style.contactTop}>
                        <Col ><p className={Style.conUs}>CONTACT US</p></Col>
                    </Row>

                
                    <Row className={Style.contactTop1}>
                        <p>Ipsum, Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Sed tempore quas quisquam fugiat sint perferendis veritatis 
                            repudiandae est unde qui! Perspiciatis non 
                            dicta facilis voluptate fuga autem dolor nemo? Mollitia!
                        </p>
                    </Row>


                    <Row className={Style.eachbox}>
                        {/* <div className={Style.eachbox} >box1</div>
                        <div>box1</div>
                        <div>box1</div> */}
                        <Col className={Style.smallBox} xs={12} md={{ span: 3, offset: 0 }}>
                                <h5>
                                    box 1:
                                </h5> 
                                <p className="justify-content-md-center">Ipsum, Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                Sed tempore quas quisquam fugiat sint perferendis veritatis 
                            </p>
                        </Col>
                        <Col className={Style.smallBox} xs={12} md={{ span: 3, offset: 1 }}>
                                <h5>
                                    box 2:
                                </h5> 
                                <p className="justify-content-md-center">Ipsum, Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                Sed tempore quas quisquam fugiat sint perferendis veritatis 
                            </p>    
                        </Col>
                        <Col className={Style.smallBox} xs={12} md={{span:3, offset:1}}>
                                <h5>
                                    box 3:
                                </h5> 
                                <p className="justify-content-md-center">Ipsum, Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                Sed tempore quas quisquam fugiat sint perferendis veritatis 
                            </p>    
                        </Col>
                    </Row>

                    <Row>
  
                        <Col md="6" sm="12" xs="12" className={Style.map}>
                            <MapContainer />
                        </Col>

                        
                        <Col md="6" sm="12" xs="12" className={Style.formGroup} >
                            <Form id="form" className={Style.formOrder} onSubmit={this.handleSubmit}>
                                <Form.Group as = {Row}>
                                    <Col sm="10" md="10">
                                        <Form.Control id="full-name" name="name" type="text" placeholder="Name" value={this.state.name} onChange={this.handleChange}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as = {Row}>
                                    <Col sm="10" md="10">
                                        <Form.Control id="email" name="email" type="text" placeholder="Enter Email" value={this.state.email} onChange={this.handleChange}/>
                                    </Col>
                                </Form.Group>
                            
                                <Form.Group as = {Row}>
                                    <Col sm="10" md="10">
                                        <Form.Control id="subject" name="subject" type="text" placeholder="Subject" value={this.state.subject} onChange={this.handleChange}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as = {Row}>
                                    <Col sm="10" md="10">
                                        <Form.Control id="message" name="message" as="textarea" rows="3" placeholder="Enter Message" value={this.state.message} onChange={this.handleChange}/>
                                    </Col>
                                </Form.Group>

                                <Button className="justify-content-md-center" type="submit" disabled="true">Send</Button> 
                            </Form>
                        </Col>

                    </Row>
                </Container>
            </Container>
            </div>
        )
    }


}

export default ContactPage;
