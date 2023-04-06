import Card from "react-bootstrap/Card";


const Lihat = (props) => {
    return (
        <a href={props.link}>
            <Card className="d-flex px-4" style={{ textAlign: "center", flexDirection: "row", alignItems: "center", border: "1px solid #DDDDDD", color: "black"}}>
                <Card.Body>
                    <Card.Text>
                        <h1 style={{ fontSize: "16px",color: "red" }}>Lihat Semua</h1>
                    </Card.Text>
                </Card.Body>
            </Card>
        </a>
    );
};

export default Lihat;