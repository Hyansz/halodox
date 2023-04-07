import React, { useState } from "react";
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBContainer,
    MDBRow, 
    MDBCol
} from "mdb-react-ui-kit";
import ArtikelItem from "./ArtikelItem";
import Makan from "./../Assets/Makan.jpg"
import Diagnosis from "./../Assets/diagnosis.jpg"
import Merawat from "./../Assets/Merawat.jpg"
import Skincare from "./../Assets/skincare.jpg"

export default function App() {
const [basicActive, setBasicActive] = useState("tab1");
const handleBasicClick = (value) => {
    if (value === basicActive) {
        return;
    }
    setBasicActive(value);
};

    return (
        <>
            <MDBTabs pills className="mb-3">
                <MDBContainer>
                    <MDBRow>
                        <MDBCol size="md" md="auto" className="p-0 m-0">
                            <MDBTabsItem>
                                <MDBTabsLink
                                    onClick={() => handleBasicClick("tab1")}
                                    active={basicActive === "tab1"}
                                >
                                    Terbaru
                                </MDBTabsLink>
                            </MDBTabsItem>
                        </MDBCol>
                        <MDBCol size="md" md="auto" className="p-0 m-0">
                            <MDBTabsItem>
                                <MDBTabsLink
                                    onClick={() => handleBasicClick("tab2")}
                                    active={basicActive === "tab2"}
                                >
                                    Populer
                                </MDBTabsLink>
                            </MDBTabsItem>
                        </MDBCol>
                        <MDBCol size="md" md="auto" className="p-0 m-0">
                            <MDBTabsItem>
                                <MDBTabsLink
                                    onClick={() => handleBasicClick("tab3")}
                                    active={basicActive === "tab3"}
                                >
                                    Kehamilan
                                </MDBTabsLink>
                            </MDBTabsItem>
                        </MDBCol>
                        <MDBCol size="md" md="auto" className="p-0 m-0">
                            <MDBTabsItem>
                                <MDBTabsLink
                                    onClick={() => handleBasicClick("tab4")}
                                    active={basicActive === "tab4"}
                                >
                                    Flu Babi
                                </MDBTabsLink>
                            </MDBTabsItem>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBTabs>

            <MDBTabsContent>
                <MDBTabsPane show={basicActive === "tab1"}>
                    <MDBContainer>
                        <MDBRow className="row py-2 my-3">
                            <MDBCol md="3" className="p-0 m-0">
                                <ArtikelItem
                                image={Makan}
                                title="Tips Melaksanakan Puasa bagi Pengidap Bulimia dan Anoreksia"
                                desc="Bagi sebagian orang, berpuasa di bulan Ramadan bukanlah hal yang mudah..."
                                link="https://www.halodoc.com/artikel/tips-melaksanakan-puasa-bagi-pengidap-bulimia-dan-anoreksia"/>
                            </MDBCol>
                            <MDBCol md="3" className="p-0 m-0">
                                <ArtikelItem
                                image={Diagnosis}
                                title="9 Jenis Tes untuk Memastikan Diagnosis Kanker Usus Besar"
                                desc="Halodoc, Jakarta - Jangan pernah remehkan sembelit! Sebab, sembelit berkepanjangan..."
                                link="https://www.halodoc.com/artikel/9-jenis-tes-untuk-memastikan-diagnosis-kanker-usus-besar"/>
                            </MDBCol>
                            <MDBCol md="3" className="p-0 m-0">
                                <ArtikelItem
                                image={Merawat}
                                title="Pentingnya Dukungan Keluarga dalam Merawat Pengidap Autisme"
                                desc="Meski belum ada obatnya, intervensi yang tepat dalam merawat pengidap autisme..."
                                link="https://www.halodoc.com/artikel/pentingnya-dukungan-keluarga-dalam-merawat-pengidap-autisme-1"/>
                            </MDBCol>
                            <MDBCol md="3" className="p-0 m-0">
                                <ArtikelItem
                                image={Skincare}
                                title="Cara Mengatasi Kulit Kering saat Puasa"
                                desc="Kurangnya asupan cairan saat puasa dapat membuat kulit kering. Jangan khawatir..."
                                link="https://www.halodoc.com/artikel/cara-mengatasi-kulit-kering-saat-puasa"/>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBTabsPane>
                <MDBTabsPane show={basicActive === "tab2"}>
                    <MDBContainer>
                        <MDBRow className="row py-2 my-3">
                            <MDBCol md="3" className="p-0 m-0">
                                <ArtikelItem
                                image={Diagnosis}
                                title="9 Jenis Tes untuk Memastikan Diagnosis Kanker Usus Besar"
                                desc="Halodoc, Jakarta - Jangan pernah remehkan sembelit! Sebab, sembelit berkepanjangan..."
                                link="https://www.halodoc.com/artikel/9-jenis-tes-untuk-memastikan-diagnosis-kanker-usus-besar"/>
                            </MDBCol>
                            <MDBCol md="3" className="p-0 m-0">
                                <ArtikelItem
                                image={Merawat}
                                title="Pentingnya Dukungan Keluarga dalam Merawat Pengidap Autisme"
                                desc="Meski belum ada obatnya, intervensi yang tepat dalam merawat pengidap autisme..."
                                link="https://www.halodoc.com/artikel/pentingnya-dukungan-keluarga-dalam-merawat-pengidap-autisme-1"/>
                            </MDBCol>
                            <MDBCol md="3" className="p-0 m-0">
                                <ArtikelItem
                                image={Skincare}
                                title="Cara Mengatasi Kulit Kering saat Puasa"
                                desc="Kurangnya asupan cairan saat puasa dapat membuat kulit kering. Jangan khawatir..."
                                link="https://www.halodoc.com/artikel/cara-mengatasi-kulit-kering-saat-puasa"/>
                            </MDBCol>
                            <MDBCol md="3" className="p-0 m-0">
                                <ArtikelItem
                                image={Makan}
                                title="Tips Melaksanakan Puasa bagi Pengidap Bulimia dan Anoreksia"
                                desc="Bagi sebagian orang, berpuasa di bulan Ramadan bukanlah hal yang mudah..."
                                link="https://www.halodoc.com/artikel/tips-melaksanakan-puasa-bagi-pengidap-bulimia-dan-anoreksia"/>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBTabsPane>
                <MDBTabsPane show={basicActive === "tab3"}>
                    <MDBContainer>
                        <MDBRow className="row py-2 my-3">
                            <MDBCol md="3" className="p-0 m-0">
                                <ArtikelItem
                                image={Merawat}
                                title="Pentingnya Dukungan Keluarga dalam Merawat Pengidap Autisme"
                                desc="Meski belum ada obatnya, intervensi yang tepat dalam merawat pengidap autisme..."
                                link="https://www.halodoc.com/artikel/pentingnya-dukungan-keluarga-dalam-merawat-pengidap-autisme-1"/>
                            </MDBCol>
                            <MDBCol md="3" className="p-0 m-0">
                                <ArtikelItem
                                image={Skincare}
                                title="Cara Mengatasi Kulit Kering saat Puasa"
                                desc="Kurangnya asupan cairan saat puasa dapat membuat kulit kering. Jangan khawatir..."
                                link="https://www.halodoc.com/artikel/cara-mengatasi-kulit-kering-saat-puasa"/>
                            </MDBCol>
                            <MDBCol md="3" className="p-0 m-0">
                                <ArtikelItem
                                image={Makan}
                                title="Tips Melaksanakan Puasa bagi Pengidap Bulimia dan Anoreksia"
                                desc="Bagi sebagian orang, berpuasa di bulan Ramadan bukanlah hal yang mudah..."
                                link="https://www.halodoc.com/artikel/tips-melaksanakan-puasa-bagi-pengidap-bulimia-dan-anoreksia"/>
                            </MDBCol>
                            <MDBCol md="3" className="p-0 m-0">
                                <ArtikelItem
                                image={Diagnosis}
                                title="9 Jenis Tes untuk Memastikan Diagnosis Kanker Usus Besar"
                                desc="Halodoc, Jakarta - Jangan pernah remehkan sembelit! Sebab, sembelit berkepanjangan..."
                                link="https://www.halodoc.com/artikel/9-jenis-tes-untuk-memastikan-diagnosis-kanker-usus-besar"/>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBTabsPane>
                <MDBTabsPane show={basicActive === "tab4"}>
                    <MDBContainer>
                        <MDBRow className="row py-2 my-3">
                            <MDBCol md="3" className="p-0 m-0">
                                <ArtikelItem
                                image={Skincare}
                                title="Cara Mengatasi Kulit Kering saat Puasa"
                                desc="Kurangnya asupan cairan saat puasa dapat membuat kulit kering. Jangan khawatir..."
                                link="https://www.halodoc.com/artikel/cara-mengatasi-kulit-kering-saat-puasa"/>
                            </MDBCol>
                            <MDBCol md="3" className="p-0 m-0">
                                <ArtikelItem
                                image={Makan}
                                title="Tips Melaksanakan Puasa bagi Pengidap Bulimia dan Anoreksia"
                                desc="Bagi sebagian orang, berpuasa di bulan Ramadan bukanlah hal yang mudah..."
                                link="https://www.halodoc.com/artikel/tips-melaksanakan-puasa-bagi-pengidap-bulimia-dan-anoreksia"/>
                            </MDBCol>
                            <MDBCol md="3" className="p-0 m-0">
                                <ArtikelItem
                                image={Diagnosis}
                                title="9 Jenis Tes untuk Memastikan Diagnosis Kanker Usus Besar"
                                desc="Halodoc, Jakarta - Jangan pernah remehkan sembelit! Sebab, sembelit berkepanjangan..."
                                link="https://www.halodoc.com/artikel/9-jenis-tes-untuk-memastikan-diagnosis-kanker-usus-besar"/>
                            </MDBCol>
                            <MDBCol md="3" className="p-0 m-0">
                                <ArtikelItem
                                image={Merawat}
                                title="Pentingnya Dukungan Keluarga dalam Merawat Pengidap Autisme"
                                desc="Meski belum ada obatnya, intervensi yang tepat dalam merawat pengidap autisme..."
                                link="https://www.halodoc.com/artikel/pentingnya-dukungan-keluarga-dalam-merawat-pengidap-autisme-1"/>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBTabsPane>
            </MDBTabsContent>
        </>
    );
}

// import React from "react";


// export default function App() {
//     return (

        // <MDBContainer>
        //     <MDBRow>
        //         <MDBCol size="md" md="auto" className="p-0 m-0"></MDBCol>
        //     </MDBRow>
        // </MDBContainer>
//     );
// }
