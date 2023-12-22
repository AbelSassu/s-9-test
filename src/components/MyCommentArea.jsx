import React from "react";
import MyCommentList from "./MyCommentList";
import MyAddComment from "./MyAddComment";

class MyCommentArea extends React.Component {
    state = {
        comments: [],
        isLoading: true,
        isError: false,
    };

    componentDidMount = async () => {
        try {
            let response = await fetch(
                "https://striveschool-api.herokuapp.com/api/comments/" +
                    this.props.id,
                {
                    headers: {
                        Authorization:
                            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTczNGM3YWZlMDMxZTAwMTliYTE5MmEiLCJpYXQiOjE3MDMxNjM1MjcsImV4cCI6MTcwNDM3MzEyN30.eNmlGtH4IJ6k_DV_-mCaaAj8CJssSl7beNk_PaSm6Ig",
                    },
                }
            );
            if (response.ok) {
                let comments = await response.json();
                this.setState({
                    comments: comments,
                    isLoading: false,
                    isError: false,
                });
            } else {
                console.log("Errore");
                this.setState({ isLoading: false, isError: true });
            }
        } catch (error) {
            console.log(error);
            this.setState({ isLoading: false, isError: true });
        }
    };

    render() {
        return (
            <div>
                <MyAddComment asin={this.props.id} />
                
                    <MyCommentList comment={this.state.comments}/>
                
            </div>
        );
    }
}

export default MyCommentArea;
