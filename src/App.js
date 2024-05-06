import * as React from "react";
import NavBar from "./NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import SeriesOne from "./Pages/SeriesOne";
import SeriesTwo from "./Pages/SeriesTwo";
import UpcomingSeries from "./Pages/UpcomingSeries";
import ReleaseDate from "./Pages/ReleaseDate";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./NavBar.css";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/seriesone" element={<SeriesOne />} />
          <Route path="/seriestwo" element={<SeriesTwo />} />
          <Route path="/upcomingseries" element={<UpcomingSeries />} />
          <Route path="/releasedate" element={<ReleaseDate />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
