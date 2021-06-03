import React from "react";
import { Route } from "react-router-dom";
import { LocationProvider } from "./location/LocationProvider";
import { LocationList } from "./location/LocationList";
import { AnimalProvider } from "./animal/AnimalProvider";
import { AnimalList } from "./animal/AnimalList";
import { AnimalForm } from "./animal/AnimalForm";
import { CustomerProvider } from "./customer/CustomerProvider";
import { CustomerList } from "./customer/CustomerList";
import { EmployeeProvider } from "./employee/EmployeeProvider";
import { EmployeeList } from "./employee/EmployeeList";

export const ApplicationViews = () => {
  return (
    <>
      {/*All providers are wrapped inside of eachother so each route is guranteed to have all information required */}
      {/* Render the location list when http://localhost:3000/ */}
      <LocationProvider>
        <AnimalProvider>
          <EmployeeProvider>
            <CustomerProvider>
              <Route exact path="/locations">
                <LocationList />
              </Route>

              {/* Render the animal list when http://localhost:3000/animals */}
              <Route path="/animals">
                <AnimalList />
              </Route>

              <Route exact path="/animals/create">
                <AnimalForm />
              </Route>

              {/* Render the customer list when http://localhost:3000/customers */}
              <Route path="/customers">
                <CustomerList />
              </Route>

              {/* Render the employee list when http://localhost:3000/employees */}
              <Route path="/employees">
                <EmployeeList />
              </Route>
            </CustomerProvider>
          </EmployeeProvider>
        </AnimalProvider>
      </LocationProvider>
    </>
  );
};
