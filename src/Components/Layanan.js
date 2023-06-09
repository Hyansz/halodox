import React from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBCardImage
} from 'mdb-react-ui-kit';
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Layanan1 from "./../Assets/layanan1.png";
import Layanan2 from "./../Assets/layanan2.png";
import Layanan3 from "./../Assets/layanan3.png";
import Layanan4 from "./../Assets/layanan4.png";
import Layanan5 from "./../Assets/layanan5.png";
import Layanan6 from "./../Assets/layanan6.png";
import Layanan7 from "./../Assets/layanan7.png";
import Layanan8 from "./../Assets/layanan8.png";
import Layanan9 from "./../Assets/layanan9.png";
import Layanan10 from "./../Assets/layanan10.png";

export default function Layanan(props) {
    return (
        <MDBContainer>
            <MDBRow className="mb-3">
                <MDBCol className="mb-5">
                    <a href="https://www.halodoc.com/tanya-bidan">
                        <MDBCard className="text-center" style={{ width: "100%", height: "88px", border: "none", boxShadow: "none", color: "black" }}>
                            <MDBCardImage style={{ width: "48px", height: "48px", margin: "auto" }} src={Layanan1} alt='image' position='top' />
                                <MDBCardBody>
                                    <MDBCardText style={{ fontSize: "12px", fontWeight: "400" }}>
                                        Layanan Bidan 
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </a>
                </MDBCol>
                <MDBCol className="mb-5">
                    <a href="https://www.halodoc.com/janji-medis/departemen/covid-19-test">
                        <MDBCard className="text-center" style={{ width: "100%", height: "88px", border: "none", boxShadow: "none", color: "black" }}>
                            <MDBCardImage style={{ width: "48px", height: "48px", margin: "auto" }} src={Layanan2} alt='image' position='top' />
                                <MDBCardBody>
                                    <MDBCardText style={{ fontSize: "12px", fontWeight: "400" }}>
                                        Tes COVID-19
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </a>
                </MDBCol>
                <MDBCol className="mb-5">
                    <a href="https://www.halodoc.com/diabetic-care-id/">
                        <MDBCard className="text-center" style={{ width: "100%", height: "88px", border: "none", boxShadow: "none", color: "black" }}>
                            <MDBCardImage style={{ width: "48px", height: "48px", margin: "auto" }} src={Layanan3} alt='image' position='top' />
                                <MDBCardBody>
                                    <MDBCardText style={{ fontSize: "12px", fontWeight: "400" }}>
                                        Perawatan Diabetes
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </a>
                </MDBCol>
                <MDBCol className="mb-5">
                    <a href="https://www.halodoc.com/kesehatan-jantung/">
                        <MDBCard className="text-center" style={{ width: "100%", height: "88px", border: "none", boxShadow: "none", color: "black" }}>
                            <MDBCardImage style={{ width: "48px", height: "48px", margin: "auto" }} src={Layanan4} alt='image' position='top' />
                                <MDBCardBody>
                                    <MDBCardText style={{ fontSize: "12px", fontWeight: "400" }}>
                                        Kesehatan Jantung
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </a>
                </MDBCol>
                <MDBCol className="mb-5">
                    <a href="https://www.halodoc.com/janji-medis/departemen/vaksinasi-covid-19">
                        <MDBCard className="text-center" style={{ width: "100%", height: "88px", border: "none", boxShadow: "none", color: "black" }}>
                            <MDBCardImage style={{ width: "48px", height: "48px", margin: "auto" }} src={Layanan5} alt='image' position='top' />
                                <MDBCardBody>
                                    <MDBCardText style={{ fontSize: "12px", fontWeight: "400" }}>
                                        Vaksinasi COVID-19
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </a>
                </MDBCol>
                <MDBCol className="mb-5">
                    <a href="https://health.halodoc.com/skin-health-id/">
                        <MDBCard className="text-center" style={{ width: "100%", height: "88px", border: "none", boxShadow: "none", color: "black" }}>
                            <MDBCardImage style={{ width: "48px", height: "48px", margin: "auto" }} src={Layanan6} alt='image' position='top' />
                                <MDBCardBody>
                                    <MDBCardText style={{ fontSize: "12px", fontWeight: "400" }}>
                                        Kesehatan Kulit
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </a>
                </MDBCol>
                <MDBCol className="mb-5">
                    <a href="https://health.halodoc.com/sexual-health-id/">
                        <MDBCard className="text-center" style={{ width: "100%", height: "88px", border: "none", boxShadow: "none", color: "black" }}>
                            <MDBCardImage style={{ width: "48px", height: "48px", margin: "auto" }} src={Layanan7} alt='image' position='top' />
                                <MDBCardBody>
                                    <MDBCardText style={{ fontSize: "12px", fontWeight: "400" }}>
                                        Kesehatan Seksual
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </a>
                </MDBCol>
                <MDBCol className="mb-5">
                    <a href="https://www.halodoc.com/kesehatan-mental">
                        <MDBCard className="text-center" style={{ width: "100%", height: "88px", border: "none", boxShadow: "none", color: "black" }}>
                            <MDBCardImage style={{ width: "48px", height: "48px", margin: "auto" }} src={Layanan8} alt='image' position='top' />
                                <MDBCardBody>
                                    <MDBCardText style={{ fontSize: "12px", fontWeight: "400" }}>
                                        Kesehatan Mental
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </a>
                </MDBCol>
                <MDBCol className="mb-5">
                    <a href="https://www.halodoc.com/tanya-dokter/kategori/dokter-hewan">
                        <MDBCard className="text-center" style={{ width: "100%", height: "88px", border: "none", boxShadow: "none", color: "black" }}>
                            <MDBCardImage style={{ width: "48px", height: "48px", margin: "auto" }} src={Layanan9} alt='image' position='top' />
                                <MDBCardBody>
                                    <MDBCardText style={{ fontSize: "12px", fontWeight: "400" }}>
                                        Kesehatan Hewan
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </a>
                </MDBCol>
                <MDBCol className="mb-5">
                    <a href="https://www.halodoc.com/parent-homepage-id/">
                        <MDBCard className="text-center" style={{ width: "100%", height: "88px", border: "none", boxShadow: "none", color: "black" }}>
                            <MDBCardImage style={{ width: "48px", height: "48px", margin: "auto" }} src={Layanan10} alt='image' position='top' />
                                <MDBCardBody>
                                    <MDBCardText style={{ fontSize: "12px", fontWeight: "400" }}>
                                        Parenting
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </a>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}
