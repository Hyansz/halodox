// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// const Navigation = (props) => {
//     return (
//         <Navbar expand="lg" style={{ borderBottom: "1px solid #b3b3b3" }}>
//             <Container>
//                 <Navbar.Brand href="#header">
//                     <img src={props.image} style={{width: "auto", height: "2rem"}} alt='Logo'></img>
//                 </Navbar.Brand>
//                 <Navbar.Toggle aria-controls="navbarScroll" />
//                 <Navbar.Collapse id="navbarScroll">
//                     <Nav
//                         className="me-auto my-2 my-lg-0 px-5"
//                         style={{ maxHeight: "100px"}}
//                         id='navbar-menu'
//                         navbarScroll
//                     >
//                         <Nav.Link href="#action1" className='px-3 text-black' style={{ fontSize: "16px" }}>Beranda</Nav.Link>
//                         <Nav.Link href="#action2" className='px-3 text-black' style={{ fontSize: "16px" }}>Artikel</Nav.Link>
//                         <Nav.Link href="#action3" className='px-3 text-black' style={{ fontSize: "16px" }}>Aplikasi</Nav.Link>
//                         <Nav.Link href="#action4" className='px-3 text-black' style={{ fontSize: "16px" }}>Riwayat</Nav.Link>
//                     </Nav>
//                     <Form className="d-flex">
//                         <Button variant="danger" className='py-2 px-2'>Login</Button>
//                     </Form>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// }

// export default Navigation;

import React, { useState } from "react";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBCollapse,
} from "mdb-react-ui-kit";

export default function Navbar(props) {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <MDBNavbar expand="lg" light bgColor="light" >
            <MDBContainer fluid className="mx-4">
                <MDBNavbarBrand href="#">
                    <img src={props.image} style={{width: "auto", height: "2rem"}} alt='Logo'></img>
                </MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={() => setShowBasic(!showBasic)}
                >
                    <MDBIcon icon="bars" fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showBasic}>
                    <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current="page" href="#">
                                Beranda
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current="page" href="#">
                                Artikel
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current="page" href="#">
                                Aplikasi
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current="page" href="#">
                                Riwayat
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>

                    <form className="d-flex input-group w-auto">
                        <MDBBtn color="danger">
                            Login
                        </MDBBtn>
                    </form>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}
