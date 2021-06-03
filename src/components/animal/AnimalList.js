import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AnimalContext } from "./AnimalProvider";
import "./Animal.css";

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals } = useContext(AnimalContext);

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("AnimalList: useEffect - getAnimals");
    getAnimals();
  }, []);
  const history = useHistory();

  return (
    <>
      <h2>Animals</h2>
      <button onClick={() => history.push("/animals/create")}>
        Add Animal
      </button>
      <div className="animals">
        {animals.map((animal) => {
          return (
            <div className="animal" key={animal.id} id={`animal--${animal.id}`}>
              <div className="animal__name">Name: {animal.name}</div>
              <div className="animal__breed">Breed: {animal.breed}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};
