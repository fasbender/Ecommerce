import React from 'react'
import { Col, Container, Row, Image, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'
import products from '../products' 

const ProductScreen = (props: any) => {
    const product = products.find((p) => p._id === props.match.params.id)
    return (
        <div>
            <Link to="/" className="btn btn-dark my-3"><i className="fas fa-arrow-left mx-1"></i>Go back</Link>
            <Container>
                <Row>
                    <Col md={6}>
                        <Image src={product?.image} rounded fluid/>
                        <h1>Description</h1>
                        <p className="border border-black p-2">{product?.description}</p>    
                    </Col>
                    <Col md={3}>
                        <h5>{product?.name}</h5>
                        <h6>{product?.brand}</h6>
                        <h4 className="my-4 text-muted">${product?.price} USD</h4>
                        <Rating value={product?.rating} text={`${product?.numReviews} reviews`}/>
                        {/* <p>{product?.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</p> */}
                        <Button className="w-100 mt-5" variant="primary" size="lg">ADD<i className="fas fa-shopping-cart p-1"></i></Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProductScreen
