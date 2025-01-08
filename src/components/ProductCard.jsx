import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProductCard({ item }) {
  const handleClick = (product, event) => {
    event.preventDefault();
    alert(`${product} added to cart!`);
  };
  return (
    <Card className="product-card d-flex flex-column h-100 align-items-center justify-content-center position-relative">
      <Card.Img variant="top" src={item.image} className="card-image" />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="product-title">
          {item?.title.padEnd(100, " ")}
        </Card.Title>
        <Card.Text className="product-description text-muted ">
          {item?.description.length > 120
            ? item.description.slice(0, 120) + "..."
            : item.description}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
        <div className="d-flex justify-content-between align-items-center position-absolute w-100 bottom-0 end-0 p-3">
          <span className="fw-bold">${item.price}</span>
          <a
            href=""
            onClick={() => handleClick(item.title)}
            className="btn btn-primary btn-sm"
          >
            View Details
          </a>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
