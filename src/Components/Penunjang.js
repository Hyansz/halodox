import React from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBCardImage
} from 'mdb-react-ui-kit';
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Penunjang1 from "./../Assets/penunjang1.png";
import Penunjang2 from "./../Assets/penunjang2.png";
import Penunjang3 from "./../Assets/penunjang3.png";
import Penunjang4 from "./../Assets/penunjang4.png";
import Penunjang5 from "./../Assets/penunjang5.png";
import Penunjang6 from "./../Assets/penunjang6.png";
import Penunjang7 from "./../Assets/penunjang7.png";
import Penunjang8 from "./../Assets/penunjang8.png";
import Penunjang9 from "./../Assets/penunjang9.png";
import Penunjang10 from "./../Assets/penunjang10.png";

export default function Penunjang(props) {
    return (
        <MDBContainer>
            <MDBRow className="mb-3">
                <MDBCol className="mb-5">
                    <a href={props.link1}>
                        <MDBCard className="text-center" style={{ width: "100%", height: "88px", border: "none", boxShadow: "none", color: "black" }}>
                            <MDBCardImage style={{ width: "48px", height: "48px", margin: "auto" }} src={Penunjang1} alt='image' position='top' />
                                <MDBCardBody>
                                    <MDBCardText style={{ fontSize: "12px", fontWeight: "400" }}>
                                        Cek Stres
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </a>
                </MDBCol>
                <MDBCol className="mb-5">
                    <a href={props.link2}>
                        <MDBCard className="text-center" style={{ width: "100%", height: "88px", border: "none", boxShadow: "none", color: "black" }}>
                            <MDBCardImage style={{ width: "48px", height: "48px", margin: "auto" }} src={Penunjang2} alt='image' position='top' />
                                <MDBCardBody>
                                    <MDBCardText style={{ fontSize: "12px", fontWeight: "400" }}>
                                        Kalender Menstruasi
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </a>
                </MDBCol>
                <MDBCol className="mb-5">
                    <a href={props.link3}>
                        <MDBCard className="text-center" style={{ width: "100%", height: "88px", border: "none", boxShadow: "none", color: "black" }}>
                            <MDBCardImage style={{ width: "48px", height: "48px", margin: "auto" }} src={Penunjang3} alt='image' position='top' />
                                <MDBCardBody>
                                    <MDBCardText style={{ fontSize: "12px", fontWeight: "400" }}>
                                        Kalkulator BMI
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </a>
                </MDBCol>
                <MDBCol className="mb-5">
                    <a href={props.link4}>
                        <MDBCard className="text-center" style={{ width: "100%", height: "88px", border: "none", boxShadow: "none", color: "black" }}>
                            <MDBCardImage style={{ width: "48px", height: "48px", margin: "auto" }} src={Penunjang4} alt='image' position='top' />
                                <MDBCardBody>
                                    <MDBCardText style={{ fontSize: "12px", fontWeight: "400" }}>
                                        Kalender Kehamilan
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </a>
                </MDBCol>
                <MDBCol className="mb-5">
                    <a href={props.link5}>
                        <MDBCard className="text-center" style={{ width: "100%", height: "88px", border: "none", boxShadow: "none", color: "black" }}>
                            <MDBCardImage style={{ width: "48px", height: "48px", margin: "auto" }} src={Penunjang5} alt='image' position='top' />
                                <MDBCardBody>
                                    <MDBCardText style={{ fontSize: "12px", fontWeight: "400" }}>
                                        Risiko Jantung
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </a>
                </MDBCol>
                <MDBCol className="mb-5">
                    <a href={props.link6}>
                        <MDBCard className="text-center" style={{ width: "100%", height: "88px", border: "none", boxShadow: "none", color: "black" }}>
                            <MDBCardImage style={{ width: "48px", height: "48px", margin: "auto" }} src={Penunjang6} alt='image' position='top' />
                                <MDBCardBody>
                                    <MDBCardText style={{ fontSize: "12px", fontWeight: "400" }}>
                                        Risiko Diabetes
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </a>
                </MDBCol>
                <MDBCol className="mb-5">
                    <a href={props.link7}>
                        <MDBCard className="text-center" style={{ width: "100%", height: "88px", border: "none", boxShadow: "none", color: "black" }}>
                            <MDBCardImage style={{ width: "48px", height: "48px", margin: "auto" }} src={Penunjang7} alt='image' position='top' />
                                <MDBCardBody>
                                    <MDBCardText style={{ fontSize: "12px", fontWeight: "400" }}>
                                        Pengingat Obat 
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </a>
                </MDBCol>
                <MDBCol className="mb-5">
                    <a href={props.link8}>
                        <MDBCard className="text-center" style={{ width: "100%", height: "88px", border: "none", boxShadow: "none", color: "black" }}>
                            <MDBCardImage style={{ width: "48px", height: "48px", margin: "auto" }} src={Penunjang8} alt='image' position='top' />
                                <MDBCardBody>
                                    <MDBCardText style={{ fontSize: "12px", fontWeight: "400" }}>
                                        Donasi 
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </a>
                </MDBCol>
                <MDBCol className="mb-5">
                    <a href={props.link9}>
                        <MDBCard className="text-center" style={{ width: "100%", height: "88px", border: "none", boxShadow: "none", color: "black" }}>
                            <MDBCardImage style={{ width: "48px", height: "48px", margin: "auto" }} src={Penunjang9} alt='image' position='top' />
                                <MDBCardBody>
                                    <MDBCardText style={{ fontSize: "12px", fontWeight: "400" }}>
                                        Tes Depresi 
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </a>
                </MDBCol>
                <MDBCol className="mb-5">
                    <a href={props.link10}>
                        <MDBCard className="text-center" style={{ width: "100%", height: "88px", border: "none", boxShadow: "none", color: "black" }}>
                            <MDBCardImage style={{ width: "48px", height: "48px", margin: "auto" }} src={[Penunjang10]} alt='image' position='top' />
                                <MDBCardBody>
                                    <MDBCardText style={{ fontSize: "12px", fontWeight: "400" }}>
                                        Tes Gangguan Kecemasan 
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </a>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}
