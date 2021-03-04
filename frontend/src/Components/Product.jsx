import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
const Product = ({ product }) => {
	return (
		<React.Fragment>
			<Card className="my-3 p-2 roudend">
				<a href={`/product/${product._id}`}>
					<Card.Img src={product.image} varient="top" />
				</a>
				<Card.Body>
					<a href={`/product/${product._id}`}>
						<Card.Title as="div">
							<strong className="text-capitalize">
								{product.name}
							</strong>
						</Card.Title>
					</a>
					<Card.Text as="div">
						<Rating
							value={product.rating}
							text={`${product.numberReview} Reviews`}
						/>
						<div className="my-3">
							{product.rating} from {product.numberReview} reviews
						</div>
					</Card.Text>
					<Card.Text as="h3">${product.price}</Card.Text>
				</Card.Body>
			</Card>
		</React.Fragment>
	);
};

export default Product;
