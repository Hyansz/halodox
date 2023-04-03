import Card from "react-bootstrap/Card";

const Layanan = (props) => {
    return (
        <Card className="text-center" style={{ width: "100px", height: "88px", border: "none" }}>
            <Card.Img variant="top" src={props.image} style={{ width: "48px", height: "48px", margin: "auto" }} />
            <Card.Body>
                <Card.Text style={{ fontSize: "14px", fontWeight: "400" }}>
                    {props.title}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Layanan;