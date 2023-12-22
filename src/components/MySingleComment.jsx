import { Row, Col, Button } from "react-bootstrap";

const MySingleComment = (props) => {
    const deleteComment = async (asin) => {
        try {
            let response = await fetch(
                "https://striveschool-api.herokuapp.com/api/comments/" + asin,
                {
                    method: "DELETE",
                    headers: {
                        Authorization:
                            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0NDhkOGI1MjViYjAwMThlZDA4MWEiLCJpYXQiOjE3MDMxNjgyMTYsImV4cCI6MTcwNDM3NzgxNn0.KYyNWJmCM527pFJgTNYFIrznduNAOR37QBrNkslFTU8",
                    },
                }
            );
            if (response.ok) {
                alert("Commento eliminato");
            } else {
                alert("Errore nella cancellazione");
            }
        } catch (err) {
            alert("Errore");
        }
    };

    return (
        <Row>
            <Col className="d-flex justify-content-between mb-2">
                <p className="text-white">{props.rec.comment}</p>
                <Button
                className="bottone"
                    variant="danger"
                    onClick={() => deleteComment(props.rec._id)}
                >
                    🗑
                </Button>
            </Col>
        </Row>
    );
};

export default MySingleComment;
