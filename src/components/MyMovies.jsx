import {Col, Container, Row } from "react-bootstrap"
import MyMovieLIst from "./MyMovieList"

const MyMovies = () => {
    return (
        <Container className="m-0">
            <Row className="mmWidth">
                <Col>
                    <MyMovieLIst
                        category="http://www.omdbapi.com/?apikey=a60c976&s=harry%20potter"
                        title="Harry Potter"
                    />
                    {/*<MyMovieLIst
                        category="http://www.omdbapi.com/?apikey=a60c976&s=star%20wars"
                        title="Star Wars"
                    />
                    <MyMovieLIst
                        category="http://www.omdbapi.com/?apikey=a60c976&s=lord%20of%20the%20ring"
                        title="Lord of the Rings"
    />*/}
                </Col>
            </Row>
        </Container>
    );
}
export default MyMovies