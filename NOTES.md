Notes for understanding react:

--- Here's an example vanilla JavaScript module for a data provider.

CODE:
const animals = []

const useAnimals = () => animals.slice()

export const getAnimals = () => {
return fetch("http://localhost:8088/animals?\_expand=location")
.then(res => res.json())
.then(parsedAnimals => animals = parsedAnimals)
}

export const addAnimal = animalObj => {
return fetch("http://localhost:8088/animals", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify(animalObj)
})
.then(res => res.json())
.then(getAnimals)
}
ENDCODE:

--- The following React data provider component serves the exact same purpose as the vanilla one above.

In the React library, there is a feature called the Context API. This API provides you with two critical functions.

1. createContext() - Create the context to be used by other components that need data.

2. useContext() - Used by UI components that need data stored in the context, and exposed by the provider component.
   <Provider> <-- Parent: Creates the data context
   <Layout> <-- Child: Can use the data in the context
   <SideNav /> <-- Grandchild: Can use the data in the context
   <Content /> <-- Grandchild: Can use the data in the context
      <Footer />   <-- Grandchild: Can use the data in the context
    </Layout>
   </Provider>

   // The context is imported and used by individual components that need data

CODE:
import React, { useState, createContext } from "react"

export const AnimalContext = createContext()

// This component establishes what data can be used.

export const AnimalProvider = (props) => {
const [animals, setAnimals] = useState([])

    const getAnimals = () => {
        return fetch("http://localhost:8088/animals?_expand=location")
        .then(res => res.json())
        .then(setAnimals)
    }

    const addAnimal = animalObj => {
        return fetch("http://localhost:8088/animals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(animalObj)
        })
        .then(getAnimals)
    }

    /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */
    return (
        <AnimalContext.Provider value={{
            animals, getAnimals, addAnimal
        }}>
            {props.children}
        </AnimalContext.Provider>
    )

}
ENDCODE:
