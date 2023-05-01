import Card from "react-bootstrap/Card";
import Heal from "./../Assets/heal.png"

const Asuransi = (props) => {
    return (
        <Card className="d-flex" style={{ flexDirection: "row", alignItems: "center", border: "1px solid grey", cursor: "pointer" }}>
            {/* <Card.Img src={Heal} style={{ width: "32px", height: "32px"}} /> */}
            <div className="row p-0 m-0">
                <Card.Img src={Heal} style={{ width: "80px", height: "40px", margin: "auto" }} />
            </div>
            <Card.Body className="row pt-3 m-0">
                <Card.Text className="p-0">
                    <h1 style={{ fontSize: "16px" }}>Sambungkan Asuransimu</h1>
                    <p style={{ fontSize: "12px"}}>Dapatkan manfaat asuransi secara langsung untuk layanan Halodoc.</p>
                </Card.Text>
            </Card.Body>
            <i class="fa-solid fa-chevron-right"></i>
        </Card>
    );
};

export default Asuransi;