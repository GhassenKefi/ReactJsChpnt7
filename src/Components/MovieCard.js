import React from 'react'
import { Card,Col } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

export default function MovieCard(props) {

    return (
        <Col>
            <Link to={"/Movie/"+props.movie.key}>
            <Card className="zoom">
                <Card.Img className="MovieListImage" variant="top" src={props.movie.posterURL} />
                <Card.Body>
                    <Card.Title>{props.movie.title}</Card.Title>
                    <Card.Text>
                        {props.movie.description}
                    </Card.Text>
                </Card.Body>
                <div className="MovieRating">
                <Rating Rating={props.movie.rating}></Rating>
                </div>
            </Card>
            </Link> 

        </Col>
    )
}
