import * as React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

function SeriesTwo() {
  return (
    <body>
      <h1>Series Two</h1>
      <p>Check out the second series of books by AuthorName!</p>

      <br />

      <BookOne />

      <hr />

      <BookTwo />

      <hr />

      <BookThree />

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

function BookTwo() {
  return (
    <Card>
      <Card.Header>Book #2</Card.Header>
      <Card.Body>
        <Card.Title>Second Book Title</Card.Title>
        <Card.Text>
          This is a brief description of the second book in the series.
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
  );
}

function BookThree() {
  return (
    <Card>
      <Card.Header>Book #3</Card.Header>
      <Card.Body>
        <Card.Title>Third Book Title</Card.Title>
        <Card.Text>
          This is a brief description of the third book in the series.
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
  );
}

export default SeriesTwo;
