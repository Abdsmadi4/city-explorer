import { Component } from "react";
import Card from 'react-bootstrap/Card';

export default class SingleMovie extends Component {
    render() {
        return (
            <>
                <Card style={{ width: '18rem' }}>

                    {this.props.movieData.image_url === 'https://image.tmdb.org/t/p/w500null' ?
                        <Card.Img src="https://icon-library.com/images/null-icon/null-icon-3.jpg" alt="map" />
                        :
                        <Card.Img src={this.props.movieData.image_url} alt={this.props.movieData.title} />
                    }
                    <Card.Body>
                        <Card.Title>{this.props.movieData.title}</Card.Title>
                        <Card.Text>

                        </Card.Text>
                    </Card.Body>
                </Card>
            </>
        )
    }
}