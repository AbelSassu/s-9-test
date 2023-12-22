import React from "react";
import { Col } from "react-bootstrap";
import MyCommentArea from "./MyCommentArea";
class MySingleMovie extends React.Component {
    state = {
        selected: false,
    }

    render() {
        return (
            <Col>
                <div
                    onClick={() =>
                        this.setState({ selected: !this.state.selected })
                    }
                >
                    <img
                        src={this.props.movie.Poster}
                        className="immagini"
                        alt="immagine"
                    />
                </div>
                {this.state.selected && (
                    <MyCommentArea id={this.props.movie.imdbID} />
                )}
            </Col>
        );
    }
}

export default MySingleMovie;
