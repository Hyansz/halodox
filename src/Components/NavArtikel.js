import React, { useState } from "react";
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
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
                <MDBTabsItem>
                    <MDBTabsLink
                        onClick={() => handleBasicClick("tab1")}
                        active={basicActive === "tab1"}
                    >
                        Terbaru
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink
                        onClick={() => handleBasicClick("tab2")}
                        active={basicActive === "tab2"}
                    >
                        Populer
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink
                        onClick={() => handleBasicClick("tab3")}
                        active={basicActive === "tab3"}
                    >
                        Kehamilan
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink
                        onClick={() => handleBasicClick("tab4")}
                        active={basicActive === "tab4"}
                    >
                        Flu Babi
                    </MDBTabsLink>
                </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>
                <MDBTabsPane show={basicActive === "tab1"}>
                    <div className="row py-2 my-3">
                        <div style={{ width: "25%"}}>
                            <ArtikelItem 
                            image={Makan} 
                            title="Tips Melaksanakan Puasa bagi Pengidap Bulimia dan Anoreksia" 
                            desc="Bagi sebagian orang, berpuasa di bulan Ramadan bukanlah hal yang mudah..." 
                            link="https://www.halodoc.com/artikel/tips-melaksanakan-puasa-bagi-pengidap-bulimia-dan-anoreksia"/>
                        </div>
                        <div style={{ width: "25%"}}>
                            <ArtikelItem 
                            image={Diagnosis}
                            title="9 Jenis Tes untuk Memastikan Diagnosis Kanker Usus Besar"
                            desc="Halodoc, Jakarta - Jangan pernah remehkan sembelit! Sebab, sembelit berkepanjangan..." 
                            link="https://www.halodoc.com/artikel/9-jenis-tes-untuk-memastikan-diagnosis-kanker-usus-besar"/>
                        </div>
                        <div style={{ width: "25%"}}>
                            <ArtikelItem 
                            image={Merawat}
                            title="Pentingnya Dukungan Keluarga dalam Merawat Pengidap Autisme"
                            desc="Meski belum ada obatnya, intervensi yang tepat dalam merawat pengidap autisme..." 
                            link="https://www.halodoc.com/artikel/pentingnya-dukungan-keluarga-dalam-merawat-pengidap-autisme-1"/>
                        </div>
                        <div style={{ width: "25%"}}>
                            <ArtikelItem 
                            image={Skincare}
                            title="Cara Mengatasi Kulit Kering saat Puasa"
                            desc="Kurangnya asupan cairan saat puasa dapat membuat kulit kering. Jangan khawatir..."
                            link="https://www.halodoc.com/artikel/cara-mengatasi-kulit-kering-saat-puasa"/>
                        </div>
                    </div>
                </MDBTabsPane>
                <MDBTabsPane show={basicActive === "tab2"}>
                    <div className="row py-2 my-3">
                        <div style={{ width: "25%"}}>
                            <ArtikelItem 
                            image={Skincare}
                            title="Cara Mengatasi Kulit Kering saat Puasa"
                            desc="Kurangnya asupan cairan saat puasa dapat membuat kulit kering. Jangan khawatir..."
                            link="https://www.halodoc.com/artikel/cara-mengatasi-kulit-kering-saat-puasa"/>
                        </div>
                        <div style={{ width: "25%"}}>
                            <ArtikelItem 
                            image={Merawat}
                            title="Pentingnya Dukungan Keluarga dalam Merawat Pengidap Autisme"
                            desc="Meski belum ada obatnya, intervensi yang tepat dalam merawat pengidap autisme..." 
                            link="https://www.halodoc.com/artikel/pentingnya-dukungan-keluarga-dalam-merawat-pengidap-autisme-1"/>
                        </div>
                        <div style={{ width: "25%"}}>
                            <ArtikelItem 
                            image={Diagnosis}
                            title="9 Jenis Tes untuk Memastikan Diagnosis Kanker Usus Besar"
                            desc="Halodoc, Jakarta - Jangan pernah remehkan sembelit! Sebab, sembelit berkepanjangan..." 
                            link="https://www.halodoc.com/artikel/9-jenis-tes-untuk-memastikan-diagnosis-kanker-usus-besar"/>
                        </div>
                        <div style={{ width: "25%"}}>
                            <ArtikelItem 
                            image={Makan} 
                            title="Tips Melaksanakan Puasa bagi Pengidap Bulimia dan Anoreksia" 
                            desc="Bagi sebagian orang, berpuasa di bulan Ramadan bukanlah hal yang mudah..." 
                            link="https://www.halodoc.com/artikel/tips-melaksanakan-puasa-bagi-pengidap-bulimia-dan-anoreksia"/>
                        </div>
                    </div>
                </MDBTabsPane>
                <MDBTabsPane show={basicActive === "tab3"}>
                    <div className="row py-2 my-3">
                        <div style={{ width: "25%"}}>
                            <ArtikelItem 
                            image={Diagnosis}
                            title="9 Jenis Tes untuk Memastikan Diagnosis Kanker Usus Besar"
                            desc="Halodoc, Jakarta - Jangan pernah remehkan sembelit! Sebab, sembelit berkepanjangan..." 
                            link="https://www.halodoc.com/artikel/9-jenis-tes-untuk-memastikan-diagnosis-kanker-usus-besar"/>
                        </div>
                        <div style={{ width: "25%"}}>
                            <ArtikelItem 
                            image={Merawat}
                            title="Pentingnya Dukungan Keluarga dalam Merawat Pengidap Autisme"
                            desc="Meski belum ada obatnya, intervensi yang tepat dalam merawat pengidap autisme..." 
                            link="https://www.halodoc.com/artikel/pentingnya-dukungan-keluarga-dalam-merawat-pengidap-autisme-1"/>
                        </div>
                        <div style={{ width: "25%"}}>
                            <ArtikelItem 
                            image={Skincare}
                            title="Cara Mengatasi Kulit Kering saat Puasa"
                            desc="Kurangnya asupan cairan saat puasa dapat membuat kulit kering. Jangan khawatir..."
                            link="https://www.halodoc.com/artikel/cara-mengatasi-kulit-kering-saat-puasa"/>
                        </div>
                        <div style={{ width: "25%"}}>
                            <ArtikelItem 
                            image={Makan} 
                            title="Tips Melaksanakan Puasa bagi Pengidap Bulimia dan Anoreksia" 
                            desc="Bagi sebagian orang, berpuasa di bulan Ramadan bukanlah hal yang mudah..." 
                            link="https://www.halodoc.com/artikel/tips-melaksanakan-puasa-bagi-pengidap-bulimia-dan-anoreksia"/>
                        </div>
                    </div>
                </MDBTabsPane>
                <MDBTabsPane show={basicActive === "tab4"}>
                    <div className="row py-2 my-3">
                        <div style={{ width: "25%"}}>
                            <ArtikelItem 
                            image={Merawat}
                            title="Pentingnya Dukungan Keluarga dalam Merawat Pengidap Autisme"
                            desc="Meski belum ada obatnya, intervensi yang tepat dalam merawat pengidap autisme..." 
                            link="https://www.halodoc.com/artikel/pentingnya-dukungan-keluarga-dalam-merawat-pengidap-autisme-1"/>
                        </div>
                        <div style={{ width: "25%"}}>
                            <ArtikelItem 
                            image={Skincare}
                            title="Cara Mengatasi Kulit Kering saat Puasa"
                            desc="Kurangnya asupan cairan saat puasa dapat membuat kulit kering. Jangan khawatir..."
                            link="https://www.halodoc.com/artikel/cara-mengatasi-kulit-kering-saat-puasa"/>
                        </div>
                        <div style={{ width: "25%"}}>
                            <ArtikelItem 
                            image={Makan} 
                            title="Tips Melaksanakan Puasa bagi Pengidap Bulimia dan Anoreksia" 
                            desc="Bagi sebagian orang, berpuasa di bulan Ramadan bukanlah hal yang mudah..." 
                            link="https://www.halodoc.com/artikel/tips-melaksanakan-puasa-bagi-pengidap-bulimia-dan-anoreksia"/>
                        </div>
                        <div style={{ width: "25%"}}>
                            <ArtikelItem 
                            image={Diagnosis}
                            title="9 Jenis Tes untuk Memastikan Diagnosis Kanker Usus Besar"
                            desc="Halodoc, Jakarta - Jangan pernah remehkan sembelit! Sebab, sembelit berkepanjangan..." 
                            link="https://www.halodoc.com/artikel/9-jenis-tes-untuk-memastikan-diagnosis-kanker-usus-besar"/>
                        </div>
                    </div>
                </MDBTabsPane>
            </MDBTabsContent>
        </>
    );
}
