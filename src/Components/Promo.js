import Card from "react-bootstrap/Card";

const Promo = (props) => {
    return (
        <a href={props.link}>
            <Card className="bg-dark text-white" style={{ width: "auto", height: "auto", border: "none" }}>
                <Card.Img src={props.image} alt="Penawaran Terbatas" />
            </Card>
        </a>
    );
};

export default Promo;
