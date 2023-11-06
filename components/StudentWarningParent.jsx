"use client";

import React, { useState } from "react";
import StudentListItem from "./StudentListItem";
import { useSelector } from "react-redux";

import FilterPrice from "./FilterPrice";
import FilterKurs from "./FilterKurs";
import FilterSuccessKurs from "./FilterSuccessKurs";
import StudentSuccessItem from "./StudentSuccessItem";
import StudentWarningItem from "./StudentWarningItem";
import FilterWarningKurs from "./FilterWarningKurs";
const StudentWarningParent = () => {
  const { students, studentsWarning } = useSelector((state) => state);
  const [guruhName, setGuruhName] = useState("Barcha guruhlar");
  const handleGuruhName = (name) => {
    setGuruhName(name);
  };
  return (
    <>
      <div className="table-student">
        <div className="filter">
          <h4>{guruhName}</h4>
          <FilterWarningKurs handleGuruhName={handleGuruhName} />
        </div>
        {studentsWarning.map((student, index) =>
          student.active ? (
            <StudentWarningItem
              key={student.id}
              {...student}
              index={index + 1}
            />
          ) : null
        )}
        {studentsWarning.length === 0 ? (
          <h1>Siz izlagan guruhda o'quvchi topilmadi!</h1>
        ) : null}
      </div>
    </>
  );
};

export default StudentWarningParent;
