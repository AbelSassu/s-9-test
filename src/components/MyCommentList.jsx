import { Row, Col } from "react-bootstrap";
import MySingleComment from "./MySingleComment";

const MyCommentList = (props) => {
    console.log(props.rec);
    return (
        <Row className="mt-4 mx-2">
            {props.comment.length === 0 ? (
                <Col>
                    <p className="text-white">Non ci sono commenti</p>
                </Col>
            ) : (
                props.comment.map((commento) => (
                    <MySingleComment key={commento._id} rec={commento} />
                ))
            )}
        </Row>
    );
};

export default MyCommentList;
