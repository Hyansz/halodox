import Card from "react-bootstrap/Card";

const Obat = (props) => {
    return (
        <a href={props.link}>
            <Card className="d-flex px-4" style={{ flexDirection: "row", alignItems: "center", border: "1px solid #DDDDDD", color: "black"}}>
                <Card.Img variant="left" src={props.image} style={{ width: "32px", height: "32px" }} />
                <Card.Body>
                    <Card.Text>
                        <h1 style={{ fontSize: "16px" }}>{props.title}</h1>
                    </Card.Text>
                </Card.Body>
            </Card>
        </a>
    );
};

export default Obat;