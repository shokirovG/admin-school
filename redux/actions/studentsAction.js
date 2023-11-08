const studentsFetching = () => {
  return {
    type: "studentsFetching",
  };
};

const studentsFetched = (students) => {
  return {
    type: "studentsFetched",
    payload: students,
  };
};
const studentsFetchingError = () => {
  return {
    type: "studentsFetchingError",
  };
};

const payment = (id, pay) => ({
  type: "payment",
  payload: { id, pay },
});
const changeStudent = (studentInfo) => ({
  type: "changeStudent",
  payload: studentInfo,
});
const saveMonth = (month) => ({
  type: "saveMonth",
  payload: month,
});
const filterKurs = (kursName) => ({
  type: "filterKurs",
  payload: kursName,
});
const filterPrice = (priceName, qolganTolov) => ({
  type: "filterPrice",
  payload: {
    priceName,
    qolganTolov,
  },
});
const studentSuccess = () => ({
  type: "studentSuccess",
});
const deleteStudentAction = (id) => ({
  type: "deleteStudentAction",
  payload: id,
});
const studentSuccessFilter = (groupName) => ({
  type: "studentSuccessFilter",
  payload: groupName,
});
const addStudent = (newStudent) => ({
  type: "addStudent",
  payload: newStudent,
});
const studentWarning = () => ({
  type: "studentWarning",
});
const studentWarningFilter = (groupName) => ({
  type: "studentWarningFilter",
  payload: groupName,
});

export {
  studentsFetching,
  studentsFetched,
  studentsFetchingError,
  payment,
  changeStudent,
  saveMonth,
  filterKurs,
  filterPrice,
  studentSuccess,
  deleteStudentAction,
  studentSuccessFilter,
  addStudent,
  studentWarning,
  studentWarningFilter,
};
