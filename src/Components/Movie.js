/* eslint-disable array-callback-return */
import { Component } from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
                                <Card style={{ width: '18rem' }}>
                                      
                                        {item.image_url === 'https://image.tmdb.org/t/p/w500null' ?
                                                <Card.Img src="https://icon-library.com/images/null-icon/null-icon-3.jpg" alt="map" />
                                                :
                                                <Card.Img src={item.image_url} alt={item.title} />
                                            }
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
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