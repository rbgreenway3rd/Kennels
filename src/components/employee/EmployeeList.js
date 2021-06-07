import React, { useContext, useEffect } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import "./Employee.css";
import { Link, useHistory } from "react-router-dom";

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
      <div className="employees">
        {employees.map((employee) => (
          <Link to={`/employees/detail/${employee.id}`} key={employee.id}>
            {employee.name}
          </Link>
        ))}
      </div>
    </>
  );
};
