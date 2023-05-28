// Imports
import { useState } from "react";

// function
function NewBeer(props) {
  
  // States
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [firstBrewed, setFirstBrewed] = useState("");
  const [contributedBy, setContributedBy] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBeer = {
      name,
      tagline,
      description,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_Level: attenuationLevel,
      contributed_by: contributedBy,
    };
    fetch("https://ih-beers-api2.herokuapp.com/beers/new", handleSubmit)
      .then((response) => response.json())
      .catch((error) => {
        console.log(error);
      });
    // console.log(newBeer);

    setName("");
    setTagline("");
    setDescription("");
    setFirstBrewed("");
    setBrewersTips("");
    setAttenuationLevel(0);
    setContributedBy("");
  };

  return (
    <div>
      <h1>Add new beer</h1>
      <form className="formBeer" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          value={name}
          type="text"
          name="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label>Tagline:</label>
        <input
          value={tagline}
          type="text"
          name="tagline"
          onChange={(e) => {
            setTagline(e.target.value);
          }}
        />
        <label>Description:</label>
        <input
          value={description}
          type="text"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <label>First Brewed:</label>
        <input
          value={firstBrewed}
          type="text"
          onChange={(e) => {
            setFirstBrewed(e.target.value);
          }}
        />
        <label>Brewers Tips:</label>
        <input
          value={brewersTips}
          type="text"
          onChange={(e) => {
            setBrewersTips(e.target.value);
          }}
        />
        <label>Attenuation Level:</label>
        <input
          value={attenuationLevel}
          type="number"
          onChange={(e) => {
            setAttenuationLevel(e.target.value);
          }}
        />
        <label>Contributed by:</label>
        <input
          value={contributedBy}
          type="text"
          onChange={(e) => {
            setContributedBy(e.target.value);
          }}
        />
        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
}

export default NewBeer;
