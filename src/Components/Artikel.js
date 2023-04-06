import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Artikel = (props) => {
    return (
        <Navbar expand="lg" style={{ boxShadow: "none"}}>
            <Container>
                <Navbar.Brand href="#">
                    <h1 style={{ fontSize: "24px"}}>Baca 100+ Artikel Baru</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px"}}
                    >
                    </Nav>
                    <Form className="d-flex bg-white">
                        <Button variant="white" className='py-1 px-2 text-danger' style={{ boxShadow: "none"}} href={props.link}>Lihat Semua</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Artikel;