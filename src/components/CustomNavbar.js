import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import styled from 'styled-components';

const HoverNavLink = styled(Nav.Link)`
    font-size: 21px;
    &:hover {
        color: #4796FF;
    }
`;

function CustomNavbar() {
    return (
        <Navbar className="bg-white" style={{display: 'flex', justifyContent: 'center'}}>
            <Container>
                <Navbar.Brand href="/" className="skranji-regular"
                              style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <>
                        <img
                            alt=""
                            src="/logo.png"
                            width={"113"}
                            height={"113"}
                            className="d-inline-block align-top"
                        />
                        <div style={{textAlign: 'center', marginLeft: "20px", marginTop: "5px", fontSize: "24px"}}>
                            Martin Island
                        </div>
                    </>
                </Navbar.Brand>
                <Nav className="justify-content-end pretendard-regular" activeKey="/home">
                    <Nav.Item>
                        <HoverNavLink href="/">Home</HoverNavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <HoverNavLink eventKey="/martin">About Martin</HoverNavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <HoverNavLink eventKey="/course">Courses</HoverNavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <HoverNavLink eventKey="/blog">Blog</HoverNavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <HoverNavLink eventKey="/question">Q&A</HoverNavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <HoverNavLink eventKey="/contact">Contact Us</HoverNavLink>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;