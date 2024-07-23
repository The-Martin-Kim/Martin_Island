import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import styled from 'styled-components';

const HoverNavLink = styled(Nav.Link)`
    &:hover {
        color: #4796FF;
    }
`;

function CustomNavbar() {
    return (
        <Navbar bg="light" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/" className="skranji-regular">
                    <img
                        alt=""
                        src="/logo.png"
                        width={"30"}
                        height={"30"}
                        className="d-inline-block align-top"
                    />{' '}
                    Martin Island
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