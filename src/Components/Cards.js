import Card from "react-bootstrap/Card";

const Cards = (props) => {
    return (
        <a href={props.link}>
            <Card className="text-center py-2" style={{ width: "100%", height: "85%", border: "1px solid grey", color: "black" }}>
                <Card.Img variant="top" src={props.image} style={{ width: "75px", height: "75px", margin: "auto" }} />
                <Card.Body>
                    <Card.Text style={{ fontSize: "14px", fontWeight: "600"}}>
                        {props.title}
                    </Card.Text>
                </Card.Body>
            </Card>
        </a>
    );
};

export default Cards;
