import React from "react";
import { Row, Carousel } from "react-bootstrap";
import MySingleMovie from "./MySingleMovie";

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
        const { movies } = this.state;
        const chunkSize = 5;

        const chunks = movies.Search
            ? Array(Math.ceil(movies.Search.length / chunkSize))
                  .fill()
                  .map((_, index) => index * chunkSize)
                  .map((begin, index) =>
                      movies.Search.slice(begin, begin + chunkSize)
                  )
            : [];

        return (
            <div>
                <h4 className="my-4">{this.props.title}</h4>
                {chunks.length > 0 && (
                    <Carousel interval={306000} wrap={true} pause={false}>
                        {chunks.map((chunk, index) => (
                            <Carousel.Item key={index}>
                                <Row className="flex-nowrap overflow-y-none">
                                    {chunk.map((movie, movieIndex) => (
                                        <MySingleMovie
                                            key={movieIndex}
                                            movie={movie}
                                        />
                                    ))}
                                </Row>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                )}
            </div>
        );
    }
}

export default MyMovieList;
