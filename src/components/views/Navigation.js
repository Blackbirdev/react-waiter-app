import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <Navbar bg='primary' variant='dark' expand='md' className='mt-4 mb-4 rounded'>
            <Container>
                <Navbar.Brand as={NavLink} to="/">WaiterApp</Navbar.Brand>
                <Nav>
                    <Nav.Link as={NavLink} to="/">Homepage</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigation;