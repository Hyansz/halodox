import Card from "react-bootstrap/Card";

const Cards = (props) => {
    return (
        <Card className="text-center p-2" style={{ width: "180px", height: "129px" }}>
            <Card.Img variant="top" src={props.image} style={{ width: "75px", height: "80px", margin: "auto" }} />
            <Card.Body>
                <Card.Text style={{ fontSize: "14px", fontWeight: "600" }}>
                    {props.title}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Cards;
