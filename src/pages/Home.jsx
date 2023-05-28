// Imports
import React from "react";
import { Link } from "react-router-dom";
import beersImage from "../assets/beers.png";
import randomBeerImage from "../assets/random-beer.png";
import newBeerImage from "../assets/new-beer.png";

// function
function Home() {
  return (
    <div>
      <img className="imgHome" src={beersImage} alt="beers" width="460px" />
      <br />
      <Link className="tituloHome" to="/beers">All Beers</Link>
      <br />
      <img  className="imgHome" src={randomBeerImage} alt="beers" width="460px" />
      <br />
      <Link className="tituloHome" to="/random">Random Beer</Link>
      <br />
      <img  className="imgHome" src={newBeerImage} alt="beers" width="460px" />
      <br />
      <Link className="tituloHome" to="/new">New Beer</Link>
    </div>
  );
}

export default Home;
