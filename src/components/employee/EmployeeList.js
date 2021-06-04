import React, { useContext, useEffect } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import "./Employee.css";
import { useHistory } from "react-router-dom";

export const EmployeeList = () => {
  const { employees, getEmployees } = useContext(EmployeeContext);

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("EmployeeList: useEffect - getEmployees");
    getEmployees();
  }, []);

  const history = useHistory();

  return (
    <>
      <h2>Employees</h2>
      <button onClick={() => history.push("/employees/create")}>
        Add Employee
      </button>
      <section className="employees">
        {employees.map((employee) => {
          return (
            <div
              className="employee"
              key={employee.id}
              id={`employee--${employee.id}`}
            >
              <div className="employee__name">Name: {employee.name}</div>
              <div className="employee__location">
                Location: {employee.locationId}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};
