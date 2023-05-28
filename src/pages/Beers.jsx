// Imports
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// function
function Beers() {
  const [beers, setBeers] = useState(null);
  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => response.json())
      .then((data) => {
        setBeers(data);
      })
      .catch((error) => {

         console.log(error);
      });
  }, []);

  // console.log(beers);
  return (
    <div>
      {beers === null ? (
        <h3>Loading, please wait...</h3>
      ) : (
        beers.map((eachBeer) => (
          <Link
            to={`/${eachBeer._id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="cardList" key={eachBeer.id}>
              <img src={eachBeer.image_url} width="60px" alt={eachBeer.name} />
              <h4>{eachBeer.name}</h4>
              <p>{eachBeer.tagline}</p>
              <span>Contributed by: {eachBeer.contributed_by}</span>
              <hr />
            </div>
          </Link>
        ))
      )}
    </div>
  );
}
export default Beers;
