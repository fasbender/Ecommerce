import React from 'react'
import Rating from '../components/Rating'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Product = (props: any) => {
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/product/${props.product._id}`}>
                <Card.Img src={props.product.image} />
            </Link>
            <Card.Body>
                <Link className="text-secondary" to={`/product/${props.product._id}`} style={{textDecoration: 'none'}}>
                    <strong><Card.Title as="div">{props.product.name}</Card.Title></strong>
                </Link>
                <Card.Text as="div">
                    <div className="my-3 text-secondary">
                        <Rating value={props.product.rating} text={`${props.product.numReviews} reviews`}/>
                    </div>
                </Card.Text>
                <Card.Text as="h3">
                    ${props.product.price}
                </Card.Text>
            </Card.Body>   
        </Card>   
    )
}

export default Product
