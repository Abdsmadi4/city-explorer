/* eslint-disable array-callback-return */
import { Component } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SingleMovie from "./SingleMovie";
class Movie extends Component {
    render() {
        console.log(this.props.movieInfo);
        return (
            <>
                <Row xs={1} md={2} lg={3}>
                { 
                    this.props.movieInfo.map(item => {
                        return (
                            <>
                            <Col>
                                <SingleMovie movieData={item}/>
                                </Col>
                            </>
                        )

                    })
                }
                </Row>
            </>


        )
    }
}

export default Movie;