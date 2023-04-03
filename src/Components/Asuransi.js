import Card from "react-bootstrap/Card";

const Asuransi = (props) => {
    return (
        <Card className="d-flex px-4" style={{ flexDirection: "row", alignItems: "center" }}>
            <Card.Img variant="left" src={props.image} style={{ width: "32px", height: "32px" }} />
            <Card.Body>
                <Card.Text>
                    <h1 style={{ fontSize: "16px" }}>Sambungkan Asuransimu</h1>
                    <p style={{ fontSize: "12px"}}>Dapatkan manfaat asuransi secara langsung untuk layanan Halodoc.</p>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Asuransi;