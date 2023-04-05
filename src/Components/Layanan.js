// import Card from "react-bootstrap/Card";

// const Layanan = (props) => {
//     return (
//         <Card className="text-center" style={{ width: "100%", height: "88px", border: "none" }}>
//             <Card.Img variant="top" src={props.image} style={{ width: "48px", height: "48px", margin: "auto" }} />
//             <Card.Body>
//                 <Card.Text style={{ fontSize: "14px", fontWeight: "400" }}>
//                     {props.title}
//                 </Card.Text>
//             </Card.Body>
//         </Card>
//     );
// };

import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBCardImage
} from 'mdb-react-ui-kit';

export default function Layanan(props) {
    return (
    <a href={props.link}>
        <MDBCard className="text-center" style={{ width: "100%", height: "88px", border: "none", boxShadow: "none", color: "black" }}>
            <MDBCardImage style={{ width: "48px", height: "48px", margin: "auto" }} src={props.image} alt='image' position='top' />
                <MDBCardBody>
                    <MDBCardText style={{ fontSize: "12px", fontWeight: "400" }}>
                        {props.title}
                </MDBCardText>
            </MDBCardBody>
        </MDBCard>
    </a>
    );
}