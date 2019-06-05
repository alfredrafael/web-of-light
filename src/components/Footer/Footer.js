import React from 'react';
import './Footer.css';
import {Row, Col, Container} from 'reactstrap';

class Footer extends React.Component {
	constructor(props) {
    super(props);
        
    }

    render() {
        
        
        const currentYear = new Date().getFullYear();

        return (
            <div className='footerDiv'>
            <Row>
                <Col>
                    <ul className="footer-nav">
                        <li><a href="#" target="_blank">Some Link </a><span className="rightsReservedAndPipe">|</span></li>
                        <li><a href="#" target="_blank">Some Link 2 </a><span className="rightsReservedAndPipe">|</span></li>
                        <li><a href="#" target="_blank">Some Link 3 </a><span className="rightsReservedAndPipe">|</span></li>
                    </ul>
                </Col>
                <Col>
                    <ul className="social-links">
                        <li><a href="#" target="_blank"><i className="fab fa-linkedin"></i></a></li>
                        <li><a href="#" target="_blank"><i className="fab fa-facebook-square"></i></a></li>
                        <li><a href="#" target="_blank"><i className="fab fa-twitter-square"></i></a></li>

                    </ul>
                </Col>
            </Row>
            <Row>
                <p className='signature'>
                    Copyright &copy; {currentYear} by &nbsp; <a href="https://alfredorafael.com/"><img src="https://i.imgur.com/6BvcC6F.png" style={{maxWidth: '12%'}}/></a> &nbsp; <span className='rightsReservedAndPipe'>.All rights reserved.</span>
                </p>
            </Row>


           </div>
        );
  }
}
export default Footer;