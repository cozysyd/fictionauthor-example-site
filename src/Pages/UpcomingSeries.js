import * as React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

function NewSeries() {
  return (
    <body>
      <h1>New Series</h1>
      <p>Get ready for the newest series by AuthorName!</p>

      <br />

      <BookOne />

      <footer>&#169; AuthorName 2024</footer>
    </body>
  );
}

function BookOne() {
  return (
    <Card>
      <Card.Header>Book #1</Card.Header>
      <Card.Body>
        <Card.Title>First Book Title</Card.Title>
        <Card.Text>
          This is a brief description of the first book in the series.
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
  );
}

export default NewSeries;
