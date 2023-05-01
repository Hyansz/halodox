import Navigation from "./Navbar";
import Logo from "./../Assets/halodoc-logo.png";
import Cards from "./Cards";
import Homebanner from "./../Assets/home-banner-v3.svg"
import Layanan from "./Layanan";
import Promo from "./Promo";
import Artikel from "./Artikel";
import NavArtikel from "./NavArtikel";
import Obat from "./Obat";
import Footer from "./Footer";
import GFooter from "./../Assets/halodoc-footer-logo.svg"
import Playstore from "./../Assets/google-play-badge.png"
import Appstore from "./../Assets/app-store-badge.png"
import Dok from "./../Assets/hd-white-logo-icon.svg"
import Penunjang from "./Penunjang";

const Main = () => {
    return (
        <div>
            <div>
                <Navigation image={Logo}/>
                <div style={{ backgroundImage: `url(${Homebanner})`, backgroundRepeat: "no-repeat", backgroundPosition: "right", backgroundSize: "cover", padding: "50px"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="row col-6 px-0">
                                    <h1 style={{ fontSize: "32px" }} className="judul">Solusi Kesehatan Terlengkap</h1>
                                    <p style={{ fontSize: "14px" }}>Chat dokter, kunjungi rumah sakit, beli obat, cek lab dan update informasi seputar kesehatan, semua bisa di Halodoc!</p>
                                </div>
                                <div className="row">
                                    <Cards />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-12">
                        <h1 style={{ fontSize: "24px" }}>Layanan Khusus</h1>
                        <div className="row py-2">
                            <Layanan />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-12">
                        <h1 style={{ fontSize: "24px" }}>Penunjang Kesehatan</h1>
                        <div className="row py-2">
                            <Penunjang 
                                link1="https://www.halodoc.com/stress-checker/"
                                link2="https://www.halodoc.com/artikel/kalender-menstruasi-di-aplikasi-halodoc"
                                link3="https://www.halodoc.com/bmi-calculator/"
                                link4="https://www.halodoc.com/artikel/kalender-kehamilan-di-aplikasi-halodoc"
                                link5="https://www.halodoc.com/heart-risk-calculator/"
                                link6="https://www.halodoc.com/diabetes-risk-calculator/"
                                link7="https://www.halodoc.com/artikel/pengingat-obat-di-aplikasi-halodoc"
                                link8="https://halodoc.kitabisa.com/"
                                link9="https://www.halodoc.com/depression-test/home"
                                link10="https://www.halodoc.com/anxiety-test/home"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <div className="row" style={{ padding: "50px 0"}}>
                    <div className="col-12">
                        <h1 style={{ fontSize: "32px" }} className="judul">Penawaran Menarik</h1>
                        <div className="row py-2">
                            <Promo />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <div className="row" style={{ padding: "50px 0"}}>
                    <div className="col-12">
                        <Artikel link="https://www.halodoc.com/artikel"/>
                        <div>
                            <NavArtikel />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <div className="row" style={{ padding: "50px 0"}}>
                    <div className="col-12">
                        <h1 style={{ fontSize: "32px" }} className="judul">Obat Dan Vitamin</h1>
                        <p style={{ fontSize: "14px" }} >Dapatkan informasi seputar kandungan, aturan, petunjuk penggunaan obat dan vitamin di sini</p>
                        <div className="row my-4">
                            <Obat />
                        </div>
                    </div>
                </div>
            </div>
            <Footer 
                image={GFooter} 
                app1={Playstore} 
                app2={Appstore} 
                dok={Dok} 
                link1="https://play.google.com/store/apps/details?id=com.linkdokter.halodoc.android&hl=in" 
                link2="https://apps.apple.com/id/app/halodoc-chat-dokter-beli-obat/id1067217981?l=id"
            />
        </div>
    )
}

export default Main;