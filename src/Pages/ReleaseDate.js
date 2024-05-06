import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

function ReleaseDate() {
  return (
    <body>
      <h1>Release Date Countdown!</h1>
      <CountdownBar />
      <p>Follow @AuthorName for more updates!</p>

      <footer>&#169; AuthorName 2024</footer>
    </body>
  );
}

function CountdownBar() {
  const now = 60;
  return <ProgressBar animated now={now} label={`${now} Days Left!`} />;
}

export default ReleaseDate;