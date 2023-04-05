import Nav from "react-bootstrap/Nav";

function NavArtikel() {
    return (
        <Nav variant="pills" defaultActiveKey="#">
            <Nav.Item>
                <Nav.Link href="#">Terbaru</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Populer</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-3">Kehamilan</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-4">Flu Babi</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default NavArtikel;
