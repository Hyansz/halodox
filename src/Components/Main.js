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

const Main = () => {
    return (
        <div>
            <Navigation image={Logo}/>
            <div style={{ backgroundImage: `url(${Homebanner})`, backgroundRepeat: "no-repeat", backgroundPosition: "right bottom", backgroundSize: "cover"}}>
                <div className="container">
                    <div className="row" style={{ padding: "50px 0"}}>
                        <div className="col-12">
                            <h1 style={{ fontSize: "32px" }}>Solusi Kesehatan Terlengkap</h1>
                            <p style={{ width: "50%", fontSize: "14px" }}>Chat dokter, kunjungi rumah sakit, beli obat, cek lab dan update informasi seputar kesehatan, semua bisa di Halodoc!</p>
                            <div className="row">
                                <div className="col-2">
                                    <Cards image={Dokter} title="Tanya Dokter"/>
                                </div>
                                <div className="col-2">
                                    <Cards image={ObatDokter} title="Toko Kesehatan"/>
                                </div>
                                <div className="col-2">
                                    <Cards image={JadwalDokter} title="Buat Janji RS"/>
                                </div>
                                <div className="col-2">
                                    <Cards image={LabDokter}  title="Janji Medis"/>
                                </div>
                                <div className="col-2">
                                    <Cards image={SuntikObat} title="Layanan Home Lab"/>
                                </div>
                            </div>
                            <div className="row my-4">
                                <div className="col-4">
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
                        <div className="row py-2" style={{ width: "100%" }}>
                            <div className="col-1">
                                <Layanan image={Layanan1} title="Layanan Bidan"/>
                            </div>
                            <div className="col-1">
                                <Layanan image={Layanan2} title="Tes COVID-19"/>
                            </div>
                            <div className="col-1">
                                <Layanan image={Layanan3} title="Perawatan Diabetes"/>
                            </div>
                            <div className="col-1">
                                <Layanan image={Layanan4} title="Kesehatan Jantung"/>
                            </div>
                            <div className="col-1">
                                <Layanan image={Layanan5} title="Vaksinasi COVID-19"/>
                            </div>
                            <div className="col-1">
                                <Layanan image={Layanan6} title="Kesehatan Kulit"/>
                            </div>
                            <div className="col-1">
                                <Layanan image={Layanan7} title="Kesehatan Seksual"/>
                            </div>
                            <div className="col-1">
                                <Layanan image={Layanan8} title="Kesehatan Mental"/>
                            </div>
                            <div className="col-1">
                                <Layanan image={Layanan9} title="Kesehatan Hewan"/>
                            </div>
                            <div className="col-1">
                                <Layanan image={Layanan10} title="Parenting"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-12">
                        <h1 style={{ fontSize: "24px" }}>Penunjang Kesehatan</h1>
                        <div className="row py-2" style={{ width: "100%" }}>
                            <div className="col-1">
                                <Layanan image={Layanan1} title="Layanan Bidan"/>
                            </div>
                            <div className="col-1">
                                <Layanan image={Layanan2} title="Tes COVID-19"/>
                            </div>
                            <div className="col-1">
                                <Layanan image={Layanan3} title="Perawatan Diabetes"/>
                            </div>
                            <div className="col-1">
                                <Layanan image={Layanan4} title="Kesehatan Jantung"/>
                            </div>
                            <div className="col-1">
                                <Layanan image={Layanan5} title="Vaksinasi COVID-19"/>
                            </div>
                            <div className="col-1">
                                <Layanan image={Layanan6} title="Kesehatan Kulit"/>
                            </div>
                            <div className="col-1">
                                <Layanan image={Layanan7} title="Kesehatan Seksual"/>
                            </div>
                            <div className="col-1">
                                <Layanan image={Layanan8} title="Kesehatan Mental"/>
                            </div>
                            <div className="col-1">
                                <Layanan image={Layanan9} title="Kesehatan Hewan"/>
                            </div>
                            <div className="col-1">
                                <Layanan image={Layanan10} title="Parenting"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;