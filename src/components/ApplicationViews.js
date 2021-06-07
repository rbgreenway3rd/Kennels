import React from "react";
import { Route } from "react-router-dom";
import { LocationProvider } from "./location/LocationProvider";
import { LocationList } from "./location/LocationList";
import { LocationForm } from "./location/LocationForm";
import { AnimalProvider } from "./animal/AnimalProvider";
import { AnimalList } from "./animal/AnimalList";
import { AnimalForm } from "./animal/AnimalForm";
import { AnimalDetail } from "./animal/AnimalDetail";
import { CustomerProvider } from "./customer/CustomerProvider";
import { CustomerList } from "./customer/CustomerList";
import { EmployeeProvider } from "./employee/EmployeeProvider";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeForm } from "./employee/EmployeeForm";
import { EmployeeDetail } from "./employee/EmployeeDetail";

export const ApplicationViews = () => {
  return (
    <>
      {/*All providers are wrapped inside of eachother so each route is guranteed to have all information required */}
      {/* Render the location list when http://localhost:3000/ */}
      <LocationProvider>
        <AnimalProvider>
          <EmployeeProvider>
            <CustomerProvider>
              <Route path="/locations">
                <LocationList />
              </Route>
              <Route exact path="/locations/create">
                <LocationForm />
              </Route>

              {/* Render the animal list when http://localhost:3000/animals */}
              <Route path="/animals">
                <AnimalList />
              </Route>

              <Route exact path="/animals/create">
                <AnimalForm />
              </Route>

              <Route exact path="/animals/detail/:animalId(\d+)">
                <AnimalDetail />
              </Route>

              {/* Render the customer list when http://localhost:3000/customers */}
              <Route path="/customers">
                <CustomerList />
              </Route>

              {/* Render the employee list when http://localhost:3000/employees */}
              <Route path="/employees">
                <EmployeeList />
              </Route>

              <Route exact path="/employees/create">
                <EmployeeForm />
              </Route>

              <Route exact path="/employees/detail/:employeeId(\d+)">
                <EmployeeDetail />
              </Route>
            </CustomerProvider>
          </EmployeeProvider>
        </AnimalProvider>
      </LocationProvider>
    </>
  );
};
