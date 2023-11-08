"use client";

import React, { useState } from "react";
import StudentListItem from "./StudentListItem";
import { useSelector } from "react-redux";
import AddStudent from "./AddStudent";
import FilterPrice from "./FilterPrice";
import FilterKurs from "./FilterKurs";
import StudentDangerItem from "./StudentDangerItem";
const StudentDangerParent = () => {
  const store = useSelector((state) => state);
  const [name, setName] = useState("Barcha guruhlar");
  console.log("parent", store);
  const handleGuruhName = (name) => {
    setName(name);
  };
  return (
    <>
      <div className="table-student">
        <div className="filter">
          {/* <h4>{name}</h4> */}
          {/* <AddStudent />
          <FilterKurs handleGuruhName={handleGuruhName} /> */}
        </div>
        {store.students.map((student, index) =>
          student.active ? (
            <StudentDangerItem
              key={student.id}
              {...student}
              index={index + 1}
            />
          ) : null
        )}
        {store.students.length === 0 ? (
          <h1>Siz izlagan kursda guruh topilmadi!</h1>
        ) : null}
      </div>
    </>
  );
};

export default StudentDangerParent;
