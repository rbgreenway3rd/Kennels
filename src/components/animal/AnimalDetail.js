import React, { useContext, useEffect, useState } from "react";
import { AnimalContext } from "./AnimalProvider";
import "./Animal.css";
import { useParams } from "react-router-dom";

export const AnimalDetail = () => {
  const { animals } = useContext(AnimalContext);
  const [animal, setAnimal] = useState({ location: {}, customer: {} });
  const [isHidden, setIsHidden] = useState(true);
  const showHideDiv = () => {
    if (isHidden === true) {
      setIsHidden(false);
    } else {
      setIsHidden(true);
    }
  };

  /*
        Given the example URL above, this will store the value
        of 5 in the animalId variable
    */
  const { animalId } = useParams();

  useEffect(() => {
    const thisAnimal = animals.find((a) => a.id === parseInt(animalId)) || {
      location: {},
      customer: {},
    };

    // debugger;
    setAnimal(thisAnimal);
  }, [animalId]);

  return (
    <section className="animal">
      <h3 className="animal__name">{animal.name}</h3>
      <div className="animal__breed">{animal.breed}</div>
      <div className="animal__location">Location: {animal.location.name}</div>
      <div className="animal__owner">Customer: {animal.customer.name}</div>
      <button onClick={() => showHideDiv()}>click here!</button>
      <div hidden={isHidden}>This is the div</div>
    </section>
  );
};
