import { Row, Col } from "react-bootstrap";
import MySingleComment from "./MySingleComment";

const MyCommentList = (props) => {
    console.log(props.commento);
    return (
        <Row className="mt-4 mx-2">
            {props.comment.length === 0 ? (
                <Col>
                    <p className="text-white">Non ci sono commenti</p>
                </Col>
            ) : (
                props.comment.map((commento) => (
                    <MySingleComment key={commento._id} commento={commento} />
                ))
            )}
        </Row>
    );
};

export default MyCommentList;
