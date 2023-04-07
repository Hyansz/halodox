import Card from "react-bootstrap/Card";

const ArtikelItem = (props) => {
    return (
        <a href={props.link}>
            <Card className=" p-2 m-2" style={{ color: "black" }}>
                <Card.Img variant="top" src={props.image} style={{ width: "100%", height: "auto", margin: "auto"}} />
                <Card.Body>
                    <Card.Text>
                        <p style={{ fontSize: "14px", fontWeight: "600" }}>{props.title}</p>
                        <p style={{ fontSize: "12px", fontWeight: "400", color: "#666666" }}>{props.desc}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </a>
    );
};

export default ArtikelItem;