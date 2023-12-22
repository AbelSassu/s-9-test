import React from "react";
import { Row } from "react-bootstrap";

class MyMovieList extends React.Component {
    state = {
        movies: [],
        isLoading: true,
        isError: false,
    };

    componentDidMount = async () => {
        try {
            let response = await fetch(this.props.category);
            if (response.ok) {
                let movies = await response.json();
                this.setState({
                    movies: movies,
                    isLoading: false,
                    isError: false,
                });
            } else {
                this.setState({ isLoading: false, isError: true });
            }
        } catch (error) {
            this.setState({ isLoading: false, isError: true });
        }
    };

    render() {
        return (
            <div>
                <h2 className="accadue">
                    {this.props.title}
                </h2>
                <Row>

                </Row>
            </div>
        );
    }
}

export default MyMovieList;