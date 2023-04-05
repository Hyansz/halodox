import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = (props) => {
    return (
        <Navbar expand="lg" style={{ borderBottom: "1px solid #b3b3b3" }}>
            <Container fluid  className=' mx-5'>
                <Navbar.Brand href="#header">
                    <img src={props.image} style={{width: "auto", height: "2rem"}} alt='Logo'></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 px-5"
                        style={{ maxHeight: "100px"}}
                        id='navbar-menu'
                        navbarScroll
                    >
                        <Nav.Link href="#action1" className='px-3 text-black' style={{ fontSize: "16px" }}>Beranda</Nav.Link>
                        <Nav.Link href="#action2" className='px-3 text-black' style={{ fontSize: "16px" }}>Artikel</Nav.Link>
                        <Nav.Link href="#action3" className='px-3 text-black' style={{ fontSize: "16px" }}>Aplikasi</Nav.Link>
                        <Nav.Link href="#action4" className='px-3 text-black' style={{ fontSize: "16px" }}>Riwayat</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Button variant="danger" className='py-2 px-2'>Login</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
