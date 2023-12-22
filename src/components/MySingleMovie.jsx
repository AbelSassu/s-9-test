import React from "react";
import { Col } from "react-bootstrap";
import MyCommentArea from "./MyCommentArea";
class MySingleMovie extends React.Component {
    state = {
        selected: false,
    }

    render() {
        return (
            <Col className="immagini">
                <div onClick={() => this.setState({ selected: !this.state.selected })}>
                    <img src={this.props.movie.Poster} alt="immagine"/>
                </div>
                {this.state.selected && <MyCommentArea id={this.props.movie.imdbID} />}
            </Col>
        )
    }
}

export default MySingleMovie;
