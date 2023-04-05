import Navigation from "./Navbar";
import Logo from "./../Assets/halodoc-logo.png";
import Cards from "./Cards";
import Dokter from "./../Assets/tanya-dokter.png"
import ObatDokter from "./../Assets/obat-dokter.png"
import JadwalDokter from "./../Assets/jadwal-dokter.png"
import LabDokter from "./../Assets/lab-dokter.png"
import SuntikObat from "./../Assets/suntik-obat.png"
import Homebanner from "./../Assets/home-banner-v3.svg"
import Asuransi from "./Asuransi";
import Heal from "./../Assets/heal.png"
import Layanan from "./Layanan";
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
import Promo from "./Promo";
import Diskon1 from "./../Assets/diskon1.jpeg";
import Diskon2 from "./../Assets/diskon2.jpeg";
import Diskon3 from "./../Assets/diskon3.jpeg";
import Artikel from "./Artikel";
import NavArtikel from "./NavArtikel";
import ArtikelItem from "./ArtikelItem";
import Makan from "./../Assets/Makan.jpg"
import Diagnosis from "./../Assets/diagnosis.jpg"
import Merawat from "./../Assets/Merawat.jpg"
import Skincare from "./../Assets/skincare.jpg"
import Obat from "./Obat";
import Obat1 from "./../Assets/obat1.png"
import Obat2 from "./../Assets/obat2.png"
import Obat3 from "./../Assets/obat3.png"
import Obat4 from "./../Assets/obat4.png"
import Obat5 from "./../Assets/obat5.png"
import Lihat from "./Lihat";
import Footer from "./Footer";
import GFooter from "./../Assets/halodoc-footer-logo.svg"
import Playstore from "./../Assets/google-play-badge.png"
import Appstore from "./../Assets/app-store-badge.png"
import Dok from "./../Assets/hd-white-logo-icon.svg"

const Main = () => {
    return (
        <div>
            <Navigation image={Logo}/>
            <div style={{ backgroundImage: `url(${Homebanner})`, backgroundRepeat: "no-repeat", backgroundPosition: "right bottom", backgroundSize: "cover"}}>
                <div className="container">
                    <div className="row" style={{ padding: "50px 0"}}>
                        <div className="col-12">
                            <h1 style={{ fontSize: "32px" }} className="judul">Solusi Kesehatan Terlengkap</h1>
                            <p style={{ fontSize: "14px" }}>Chat dokter, kunjungi rumah sakit, beli obat, cek lab dan update informasi seputar <br /> kesehatan, semua bisa di Halodoc!</p>
                            <div className="row">
                                <div style={{ width: "15%"}}>
                                    <Cards 
                                    image={Dokter} 
                                    title="Tanya Dokter" 
                                    link="https://www.halodoc.com/tanya-dokter"/>
                                </div>
                                <div style={{ width: "15%"}}>
                                    <Cards 
                                    image={ObatDokter} 
                                    title="Toko Kesehatan" 
                                    link="https://www.halodoc.com/obat-dan-vitamin"/>
                                </div>
                                <div style={{ width: "15%"}}>
                                    <Cards 
                                    image={JadwalDokter} 
                                    title="Buat Janji RS"
                                    link="https://www.halodoc.com/rumah-sakit"/>
                                </div>
                                <div style={{ width: "15%"}}>
                                    <Cards 
                                    image={LabDokter} 
                                    title="Janji Medis"
                                    link="https://www.halodoc.com/janji-medis"/>
                                </div>
                                <div style={{ width: "16%"}}>
                                    <Cards 
                                    image={SuntikObat} 
                                    title="Layanan Home Lab"
                                    link="https://www.halodoc.com/homelab/packages"/>
                                </div>
                            </div>
                            <div className="row my-1">
                                <div style={{ width: "30%"}}>
                                    <Asuransi image={Heal}/>
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
                            <div style={{ width: "10%" }}>
                                <Layanan 
                                image={Layanan1} 
                                title="Layanan Bidan"
                                link="https://www.halodoc.com/tanya-bidan"/>
                            </div>
                            <div style={{ width: "10%" }}>
                                <Layanan 
                                image={Layanan2} 
                                title="Tes COVID-19"
                                link="https://www.halodoc.com/janji-medis/departemen/covid-19-test"/>
                            </div>
                            <div style={{ width: "10%" }}>
                                <Layanan 
                                image={Layanan3} 
                                title="Perawatan Diabetes"
                                link="https://www.halodoc.com/diabetic-care-id/"/>
                            </div>
                            <div style={{ width: "10%" }}>
                                <Layanan 
                                image={Layanan4} 
                                title="Kesehatan Jantung"
                                link="https://www.halodoc.com/kesehatan-jantung/"/>
                            </div>
                            <div style={{ width: "10%" }}>
                                <Layanan 
                                image={Layanan5} 
                                title="Vaksinasi COVID-19"
                                link="https://www.halodoc.com/janji-medis/departemen/vaksinasi-covid-19"/>
                            </div>
                            <div style={{ width: "10%" }}>
                                <Layanan 
                                image={Layanan6} 
                                title="Kesehatan Kulit"
                                link="https://health.halodoc.com/skin-health-id/"/>
                            </div>
                            <div style={{ width: "10%" }}>
                                <Layanan 
                                image={Layanan7} 
                                title="Kesehatan Seksual" 
                                link="https://health.halodoc.com/sexual-health-id/"/>
                            </div>
                            <div style={{ width: "10%" }}>
                                <Layanan 
                                image={Layanan8} 
                                title="Kesehatan Mental"
                                link="https://www.halodoc.com/kesehatan-mental"/>
                            </div>
                            <div style={{ width: "10%" }}>
                                <Layanan 
                                image={Layanan9} 
                                title="Kesehatan Hewan"
                                link="https://www.halodoc.com/tanya-dokter/kategori/dokter-hewan"/>
                            </div>
                            <div style={{ width: "10%" }}>
                                <Layanan 
                                image={Layanan10} 
                                title="Parenting"
                                link="https://www.halodoc.com/parent-homepage-id/"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-12">
                        <h1 style={{ fontSize: "24px" }}>Penunjang Kesehatan</h1>
                        <div className="row py-2">
                            <div style={{ width: "10%" }}>
                                <Layanan 
                                image={Penunjang1} 
                                title="Cek Stres" 
                                link="https://www.halodoc.com/stress-checker/"/>
                            </div>
                            <div style={{ width: "10%" }}>
                                <Layanan 
                                image={Penunjang2} 
                                title="Kalender Menstruasi" 
                                link="https://www.halodoc.com/artikel/kalender-menstruasi-di-aplikasi-halodoc"/>
                            </div>
                            <div style={{ width: "10%" }}>
                                <Layanan 
                                image={Penunjang3} 
                                title="Kalkulator BMI" 
                                link="https://www.halodoc.com/bmi-calculator/"/>
                            </div>
                            <div style={{ width: "10%" }}>
                                <Layanan 
                                image={Penunjang4} 
                                title="Kalender Kehamilan" 
                                link="https://www.halodoc.com/artikel/kalender-kehamilan-di-aplikasi-halodoc"/>
                            </div>
                            <div style={{ width: "10%" }}>
                                <Layanan 
                                image={Penunjang5} 
                                title="Resiko Jantung" 
                                link="https://www.halodoc.com/heart-risk-calculator/"/>
                            </div>
                            <div style={{ width: "10%" }}>
                                <Layanan 
                                image={Penunjang6} 
                                title="Risiko Diabetes" 
                                link="https://www.halodoc.com/artikel/pengingat-obat-di-aplikasi-halodoc"/>
                            </div>
                            <div style={{ width: "10%" }}>
                                <Layanan 
                                image={Penunjang7} 
                                title="Pengingat Obat" 
                                link="https://halodoc.kitabisa.com/"/>
                            </div>
                            <div style={{ width: "9%" }}>
                                <Layanan 
                                image={Penunjang8} 
                                title="Donasi" 
                                link="https://www.halodoc.com/depression-test/home"/>
                            </div>
                            <div style={{ width: "10%" }}>
                                <Layanan 
                                image={Penunjang9} 
                                title="Tes Depresi" 
                                link="https://www.halodoc.com/depression-test/home"/>
                            </div>
                            <div style={{ width: "11%" }}>
                                <Layanan 
                                image={Penunjang10} 
                                title="Tes Gangguan Kecemasan" 
                                link="https://www.halodoc.com/anxiety-test/home"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <div className="row" style={{ padding: "50px 0"}}>
                    <div className="col-12">
                        <h1 style={{ fontSize: "32px" }} className="judul">Penawaran Menarik</h1>
                        <div className="row py-2">
                            <div style={{ width: "33.3%"}}>
                                <Promo 
                                image={Diskon3} 
                                link="https://marketing.halodoc.com/momandkidsfest/"/>
                            </div>
                            <div style={{ width: "33.3%"}}>
                                <Promo 
                                image={Diskon1} 
                                link="https://marketing.halodoc.com/halodoc-x-citibank-cc-promo/?utm_source=marketing&utm_medium=banner&utm_campaign=crm4905_cp_pr_web_020423_citibank_cc"/>
                            </div>
                            <div style={{ width: "33.3%"}}>
                                <Promo 
                                image={Diskon2} 
                                link="https://marketing.halodoc.com/halodoc-bni-debit-promo/"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <div className="row" style={{ padding: "50px 0"}}>
                    <div className="col-12">
                        <Artikel />
                        <NavArtikel />
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
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <div className="row" style={{ padding: "50px 0"}}>
                    <div className="col-12">
                        <h1 style={{ fontSize: "32px" }} className="judul">Obat Dan Vitamin</h1>
                        <p style={{ fontSize: "14px" }} >Dapatkan informasi seputar kandungan, aturan, petunjuk penggunaan obat dan vitamin di sini</p>
                        <div className="row my-4">
                            <div className="p-3" style={{ width: "33%"}}>
                                <Obat 
                                image={Obat1} 
                                title="Obat & Perawatan" 
                                link="https://www.halodoc.com/obat-dan-vitamin/kategori/obat-dan-perawatan"/>
                            </div>
                            <div className="p-3" style={{ width: "33%"}}>
                                <Obat 
                                image={Obat2} 
                                title="Vitamin & Suplemen" 
                                link="https://www.halodoc.com/obat-dan-vitamin/kategori/vitamin-dan-suplemen-1"/>
                            </div>
                            <div className="p-3" style={{ width: "33%"}}>
                                <Obat 
                                image={Obat3} 
                                title="Ibu & Anak" 
                                link="https://www.halodoc.com/obat-dan-vitamin/kategori/ibu-dan-anak-1"/>
                            </div>
                            <div className="p-3" style={{ width: "33%"}}>
                                <Obat 
                                image={Obat4} 
                                title="Susu" 
                                link="https://www.halodoc.com/obat-dan-vitamin/kategori/susu"/>
                            </div>
                            <div className="p-3" style={{ width: "33%"}}>
                                <Obat 
                                image={Obat5} 
                                title="Ramadhan" 
                                link="https://www.halodoc.com/obat-dan-vitamin/kategori/ramadhan-3"/>
                            </div>
                            <div className="p-3" style={{ width: "33%", textAlign: "center", color: "red"}}>
                                <Lihat 
                                title="Lihat Semua"
                                link="https://www.halodoc.com/obat-dan-vitamin"/>
                            </div>
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