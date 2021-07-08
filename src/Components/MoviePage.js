import React from 'react'
import { Navbar,Nav} from 'react-bootstrap'
import { useHistory } from 'react-router'
import { Row,Col } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'


export default function MoviePage({movie}) {

    const history = useHistory()

    return (
        <div className="Movie">
            <Navbar className="sticky" bg="light" variant="light">
            <Navbar.Brand href="#home" className="zoomTitle"><Link to='/'>TuniBest</Link></Navbar.Brand>
            <Nav className="gobackArrow">
            <button onClick={history.goBack} className="previous round">&#8249;</button>
            </Nav>
        </Navbar>
            <div className="MainContent">
                <Row className="SingleMovieDesc">
                    <Col sm={3}>
                        <img className="SingleMovieImage" src={movie.posterURL} alt="movie Poster"></img>
                    </Col>
                    <Col sm={9}>
                        <div className="MovieDesc">
                            <h2 className="MovieTitle">{movie.title}</h2>
                            <div className="descriptionMovie">
                            <Row>
                                <Col xs={2}>
                                    <h6>Language : </h6>
                                </Col>
                                <Col xs={10}>
                                    <h6>English</h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={2}>
                                    <h6>Rate : </h6>
                                </Col>
                                <Col xs={10}>
                                    <h6>{movie.rating} out of 10</h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={2}>
                                    <h6>Description : </h6>
                                </Col>
                                <Col xs={10}>
                                    <h6>{movie.description}</h6>
                                </Col>
                            </Row>
                            <hr></hr>
                            <div className="Trailer">
                                <h6>Movie Trailer</h6><br></br>
                                <ReactPlayer 
                                    url={movie.Trailer} 
                                />
                            </div>

                            </div>
                            

                        </div>
                    </Col>
                </Row>
            </div>

        </div>

    )
}

