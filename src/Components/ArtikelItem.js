import Card from "react-bootstrap/Card";

const ArtikelItem = (props) => {
    return (
        <a href={props.link}>
            <Card className=" p-2" style={{ color: "black" }}>
                <Card.Img variant="top" src={props.image} style={{ width: "100%", height: "auto", margin: "auto"}} />
                <Card.Body>
                    <Card.Text>
                        <h3 style={{ fontSize: "14px", fontWeight: "600" }}>{props.title}</h3>
                        <p style={{ fontSize: "12px", fontWeight: "600" }}>{props.desc}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </a>
    );
};

export default ArtikelItem;
