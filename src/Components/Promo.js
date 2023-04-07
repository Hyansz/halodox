// import Card from "react-bootstrap/Card";

// const Promo = (props) => {
//     return (
//         <a href={props.link}>
//             <Card className="bg-dark text-white" style={{ width: "auto", height: "auto", border: "none" }}>
//                 <Card.Img src={Diskon} alt="Penawaran Terbatas" />
//             </Card>
//         </a>
//     );
// };

// export default Promo;

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Card from "react-bootstrap/Card";
import Diskon1 from "./../Assets/diskon1.jpeg";
import Diskon2 from "./../Assets/diskon2.jpeg";
import Diskon3 from "./../Assets/diskon3.jpeg";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Promo() {
    const [ setSwiperRef] = useState(null);

    return (
        <>
            <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={3}
                centeredSlides={false}
                spaceBetween={30}
                pagination={{
                    type: "fraction",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <a href="https://marketing.halodoc.com/momandkidsfest/">
                        <Card className="bg-dark text-white" style={{ width: "auto", height: "auto", border: "none" }}>
                            <Card.Img src={Diskon3} alt="Penawaran Terbatas" />
                        </Card>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://marketing.halodoc.com/halodoc-x-citibank-cc-promo/?utm_source=marketing&utm_medium=banner&utm_campaign=crm4905_cp_pr_web_020423_citibank_cc">
                        <Card className="bg-dark text-white" style={{ width: "auto", height: "auto", border: "none" }}>
                            <Card.Img src={Diskon1} alt="Penawaran Terbatas" />
                        </Card>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://marketing.halodoc.com/halodoc-bni-debit-promo/">
                        <Card className="bg-dark text-white" style={{ width: "auto", height: "auto", border: "none" }}>
                            <Card.Img src={Diskon2} alt="Penawaran Terbatas" />
                        </Card>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://marketing.halodoc.com/momandkidsfest/">
                        <Card className="bg-dark text-white" style={{ width: "auto", height: "auto", border: "none" }}>
                            <Card.Img src={Diskon3} alt="Penawaran Terbatas" />
                        </Card>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://marketing.halodoc.com/halodoc-x-citibank-cc-promo/?utm_source=marketing&utm_medium=banner&utm_campaign=crm4905_cp_pr_web_020423_citibank_cc">
                        <Card className="bg-dark text-white" style={{ width: "auto", height: "auto", border: "none" }}>
                            <Card.Img src={Diskon1} alt="Penawaran Terbatas" />
                        </Card>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://marketing.halodoc.com/halodoc-bni-debit-promo/">
                        <Card className="bg-dark text-white" style={{ width: "auto", height: "auto", border: "none" }}>
                            <Card.Img src={Diskon2} alt="Penawaran Terbatas" />
                        </Card>
                    </a>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
