import * as React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";

function About() {
  return (
    <body>
      <h1>About AuthorName</h1>

      <AuthorPictures />

      <hr />

      <p>
        AuthorName is a writer of fiction and non-fiction books. AuthorName has
        been writing for over 20 years and has published over 50 books.
        AuthorName's books have been translated into 30 languages and have sold
        over 10 million copies worldwide.
      </p>

      <footer>&#169; AuthorName 2024</footer>
    </body>
  );
}

function AuthorPictures() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="https://place-hold.it/171x180" rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://place-hold.it/171x180" roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://place-hold.it/171x180" thumbnail />
        </Col>
      </Row>
    </Container>
  );
}

export default About;
