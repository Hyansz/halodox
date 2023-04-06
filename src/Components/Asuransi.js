import Card from "react-bootstrap/Card";
import Heal from "./../Assets/heal.png"

const Asuransi = (props) => {
    return (
        <Card className="d-flex px-4" style={{ flexDirection: "row", alignItems: "center", height: "80%", border: "1px solid grey", cursor: "pointer" }}>
            <Card.Img src={Heal} style={{ width: "32px", height: "32px"}} />
            <Card.Body>
                <Card.Text >
                    <h1 className="pt-3" style={{ fontSize: "16px" }}>Sambungkan Asuransimu</h1>
                    <p style={{ fontSize: "12px"}}>Dapatkan manfaat asuransi secara langsung untuk layanan Halodoc.</p>
                </Card.Text>
            </Card.Body>
            <i class="fa-solid fa-chevron-right"></i>
        </Card>
    );
};

export default Asuransi;