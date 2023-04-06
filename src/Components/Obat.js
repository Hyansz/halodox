import Card from "react-bootstrap/Card";
import Obat1 from "./../Assets/obat1.png";
import Obat2 from "./../Assets/obat2.png";
import Obat3 from "./../Assets/obat3.png";
import Obat4 from "./../Assets/obat4.png";
import Obat5 from "./../Assets/obat5.png";
import Lihat from "./Lihat";

import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

export default function App() {
    return (
        <MDBContainer>
            <MDBRow className="mb-3">
                <MDBCol sm="4" className="my-1">
                    <a href="https://www.halodoc.com/obat-dan-vitamin/kategori/obat-dan-perawatan">
                        <Card className="d-flex px-4" style={{ flexDirection: "row", alignItems: "center", border: "1px solid #DDDDDD", color: "black"}}>
                            <Card.Img variant="left" src={Obat1} style={{ width: "32px", height: "32px" }} />
                            <Card.Body>
                                <Card.Text>
                                    <h1 style={{ fontSize: "16px" }}>Obat & Perawatan</h1>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </a>
                </MDBCol>
                <MDBCol sm="4" className="my-1">
                    <a href="https://www.halodoc.com/obat-dan-vitamin/kategori/vitamin-dan-suplemen-1">
                        <Card className="d-flex px-4" style={{ flexDirection: "row", alignItems: "center", border: "1px solid #DDDDDD", color: "black"}}>
                            <Card.Img variant="left" src={Obat2} style={{ width: "32px", height: "32px" }} />
                            <Card.Body>
                                <Card.Text>
                                    <h1 style={{ fontSize: "16px" }}>Vitamin & Suplemen</h1>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </a>
                </MDBCol>
                <MDBCol sm="4" className="my-1">
                <a href="https://www.halodoc.com/obat-dan-vitamin/kategori/ibu-dan-anak-1">
                        <Card className="d-flex px-4" style={{ flexDirection: "row", alignItems: "center", border: "1px solid #DDDDDD", color: "black"}}>
                            <Card.Img variant="left" src={Obat3} style={{ width: "32px", height: "32px" }} />
                            <Card.Body>
                                <Card.Text>
                                    <h1 style={{ fontSize: "16px" }}>Ibu & Anak</h1>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </a>
                </MDBCol>
                <MDBCol sm="4" className="my-1">
                <a href="https://www.halodoc.com/obat-dan-vitamin/kategori/susu">
                        <Card className="d-flex px-4" style={{ flexDirection: "row", alignItems: "center", border: "1px solid #DDDDDD", color: "black"}}>
                            <Card.Img variant="left" src={Obat4} style={{ width: "32px", height: "32px" }} />
                            <Card.Body>
                                <Card.Text>
                                    <h1 style={{ fontSize: "16px" }}>Susu</h1>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </a>
                </MDBCol>
                <MDBCol sm="4" className="my-1">
                <a href="https://www.halodoc.com/obat-dan-vitamin/kategori/ramadhan-3">
                        <Card className="d-flex px-4" style={{ flexDirection: "row", alignItems: "center", border: "1px solid #DDDDDD", color: "black"}}>
                            <Card.Img variant="left" src={Obat5} style={{ width: "32px", height: "32px" }} />
                            <Card.Body>
                                <Card.Text>
                                    <h1 style={{ fontSize: "16px" }}>Ramadhan</h1>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </a>
                </MDBCol>
                <MDBCol sm="4" className="my-1">
                <a href="https://www.halodoc.com/obat-dan-vitamin">
                        <Lihat />
                    </a>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}