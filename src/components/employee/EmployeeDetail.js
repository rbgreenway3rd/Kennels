import React, { useContext, useEffect, useState } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import "./Employee.css";
import { useParams } from "react-router-dom";

export const EmployeeDetail = () => {
  const { employees } = useContext(EmployeeContext);
  const [employee, setEmployee] = useState({ location: {}, customer: {} });
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
  const { employeeId } = useParams();

  useEffect(() => {
    const thisEmployee = employees.find(
      (a) => a.id === parseInt(employeeId)
    ) || {
      location: {},
      customer: {},
    };

    // debugger;
    setEmployee(thisEmployee);
  }, [employeeId]);

  return (
    <section className="employee">
      <h3 className="employee__name">{employee.name}</h3>
      <div className="employee__location">
        Location: {employee.location.name}
      </div>
      <button onClick={() => showHideDiv()}>click here!</button>
      <div hidden={isHidden}>This is the div</div>
    </section>
  );
};
