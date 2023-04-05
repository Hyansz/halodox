import React from "react";
import {
    MDBFooter,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon
} from "mdb-react-ui-kit";
import { MDBBtn } from 'mdb-react-ui-kit';

export default function Footer(props) {
    return (
        <MDBFooter
            className="text-center text-lg-start text-light"
            style={{ backgroundColor: "#46568e" }}
        >
            <section className=" pt-4 px-lg-5">
                <div className="me-5 d-lg-block">
                    <span>
                        <img src={props.image} alt=""></img>
                    </span>
                </div>
            </section>

            <section className="">
                <MDBContainer className="text-center text-md-start mt-5">
                    <MDBRow className="mt-3">

                        <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Site Map
                            </h6>
                            <p>
                                <a href="#footer" className="text-reset">
                                    FAQ
                                </a>
                            </p>
                            <p>
                                <a href="#footer" className="text-reset">
                                    Blog
                                </a>
                            </p>
                            <p>
                                <a href="#footer" className="text-reset">
                                    Syarat & Ketentuan
                                </a>
                            </p>
                            <p>
                                <a href="#footer" className="text-reset">
                                    Kebijakan Privasi
                                </a>
                            </p>
                            <p>
                                <a href="#footer" className="text-reset">
                                    Promo
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="3" lg="2" xl="2" className="mt-5">
                            <p>
                                <a href="#footer" className="text-reset">
                                    Karir
                                </a>
                            </p>
                            <p>
                                <a href="#footer" className="text-reset">
                                    Security
                                </a>
                            </p>
                            <p>
                                <a href="#footer" className="text-reset">
                                    Media
                                </a>
                            </p>
                            <p>
                                <a href="#footer" className="text-reset">
                                    Corporate Partnership
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol className="mx-auto mb-4">
                            <h6 className="text-uppercase mb-4">
                                Layanan Pengaduan Konsumen
                            </h6>
                            <p>
                                <a href="#footer" className="text-reset">
                                PT Media Dokter Investama <br />
                                Jl. H.R. Rasuna Said Kav B32-33, Jakarta Selatan
                                help@halodoc.com / 021-5095-9900
                                </a>
                            </p>
                            <p>
                                <a href="#footer" className="text-reset">
                                Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga
                                Kementerian Perdagangan Republik Indonesia
                                0853 1111 1010 (WhatsApp)
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol
                            md="4"
                            lg="3"
                            xl="3"
                            className="mx-auto mb-md-0 mb-4"
                        >
                            <h6 className="text-uppercase fw-bold mb-4">
                                Download App di
                            </h6>
                            <p className="d-flex align-items-center">
                                <a href={props.link1}>
                                    <img src={props.app1} alt="" style={{ width: "50%", height: "50%", padding: "0 2px" }}></img>
                                </a>
                                <a href={props.link2}>
                                    <img src={props.app2} alt="" style={{ width: "45%", height: "45%", padding: "0 2px" }}></img>
                                </a>
                            </p>
                            <h6>
                                Apakah kamu Dokter?
                            </h6>
                            <p>
                                <MDBBtn className="d-flex align-items-center bg-danger" style={{ fontSize: "16px" }}>
                                    <img src={props.dok} alt="" style={{ paddingRight: "5px"}}></img>
                                    DAFTAR
                                </MDBBtn>
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div
                className=" d-flex justify-content-center text-center p-1"
                style={{ backgroundColor: "#35406b" }}
            >
                <div className="col-10 d-flex align-items-center justify-content-center justify-content-lg-between p-3">
                    <p
                        className="text-reset"
                    >
                        ©HALODOC, 2023. ALL RIGHTS RESERVED
                    </p>
                    <div className="d-flex">
                        <p href='##' className='me-2 text-reset px-2'>
                            Follow kami di:
                        </p>
                        <a href='##' className='me-4 text-reset'>
                            <MDBIcon fab icon="twitter" />
                        </a>
                        <a href='##' className='me-4 text-reset'>
                            <MDBIcon fab icon="facebook-f" />
                        </a>
                        <a href='##' className='me-4 text-reset'>
                            <MDBIcon fab icon="instagram" />
                        </a>
                        <a href='##' className='me-4 text-reset'>
                            <MDBIcon fab icon="youtube" />
                        </a>
                    </div>
                </div>
            </div>
        </MDBFooter>
    );
}
