import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimalContext } from "./AnimalProvider";
import { Animal } from "./Animal";
import "./Animal.css";

export const AnimalList = ({ history }) => {
  const { getAnimals, animals } = useContext(AnimalContext);

  // Initialization effect hook -> Go get animal data
  useEffect(() => {
    getAnimals();
  }, []);

  return (
    <>
      <h1>Animals</h1>

      <button onClick={() => history.push("/animals/create")}>
        Make Reservation
      </button>

      <div className="animals">
        {animals.map((animal) => (
          <Link to={`/animals/detail/${animal.id}`} key={animal.id}>
            {animal.name}
          </Link>
        ))}
      </div>
    </>
  );
};

// import React, { useContext, useEffect } from "react";
// import { useHistory } from "react-router-dom";
// import { AnimalContext } from "./AnimalProvider";
// import "./Animal.css";

// export const AnimalList = () => {
//   // This state changes when `getAnimals()` is invoked below
//   const { animals, getAnimals } = useContext(AnimalContext);

//   //useEffect - reach out to the world for something
//   useEffect(() => {
//     console.log("AnimalList: useEffect - getAnimals");
//     getAnimals();
//   }, []);
//   const history = useHistory();

//   return (
//     <>
//       <h2>Animals</h2>
//       <button onClick={() => history.push("/animals/create")}>
//         Add Animal
//       </button>
//       <div className="animals">
//         {animals.map((animal) => {
//           return (
//             <div className="animal" key={animal.id} id={`animal--${animal.id}`}>
//               <div className="animal__name">Name: {animal.name}</div>
//               <div className="animal__breed">Breed: {animal.breed}</div>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };
