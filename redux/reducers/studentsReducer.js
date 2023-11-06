const initialState = {
  loading: "none",
  students: [],
  baza: [],
  studentsSuccess: [],
  studentsWarning: [],
  studentsDanger: [],
  month: "",
};

const studentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "studentsFetching": {
      return {
        ...state,
        loading: "loading",
        students: [],
      };
    }
    case "studentsFetched": {
      const studentsHas = action.payload;
      if (studentsHas) {
        return {
          ...state,
          loading: "loaded",
          students: action.payload,
          baza: action.payload,
        };
      } else {
        return {
          ...state,
          loading: "loaded",
        };
      }
    }

    case "studentsFetchingError": {
      return {
        ...state,
        loading: "error",
      };
    }
    case "payment": {
      const date = new Date();
      const newStudents = state.students.map((elem) => {
        if (elem.id === action.payload.id) {
          return {
            ...elem,
            tolov: Number(elem.tolov) + Number(action.payload.pay),
            tolovSanasi: `${date.getFullYear()}/${
              date.getMonth() + 1
            }/${date.getDate()}`,
          };
        } else {
          return elem;
        }
      });
      return {
        ...state,
        students: newStudents,
      };
    }
    case "saveMonth": {
      return {
        ...state,
        month: action.payload,
      };
    }
    case "changeStudent": {
      const newStudents = state.students.map((elem) => {
        if (elem.id === action.payload.id) {
          return {
            ...elem,
            id: action.payload.id,
            name: action.payload.nameV,
            lastName: action.payload.lastNameV,
            yosh: action.payload.yoshV,
            maktab: action.payload.maktabV,
            maktabDars: action.payload.maktabDarsV,
            kursgaKelganVaqti: action.payload.kursgaKelganVaqtiV,
            tel: action.payload.telV,
            manzil: action.payload.manzilV,
            kurs: action.payload.kursV,
            tolov: action.payload.tolovV,
            chegirma: action.payload.chegirmaV,
            chegirmaFoiz: action.payload.chegirmaFoizV,
            oqituvchisi: action.payload.oqituvchisiV,
            guruh: action.payload.guruhV,
            index: action.payload.index,
            tolovSanasi: action.payload.tolovSanasiV,
          };
        } else {
          return elem;
        }
      });

      return {
        ...state,
        students: newStudents,
      };
    }
    case "filterKurs": {
      if (action.payload !== "Barcha guruhlar") {
        const newStudents = state.students.filter(
          (elem) => elem.kurs === action.payload
        );
        return {
          ...state,
          students: newStudents,
        };
      }
    }
    case "studentSuccess": {
      const newStudentSuccess = state.students.filter((elem) => {
        let qolganTolov;
        switch (elem.kurs) {
          case "animatsiya": {
            qolganTolov =
              ((100 - elem.chegirmaFoiz) / 100) * 299000 - elem.tolov;
            break;
          }
          case "front-end": {
            qolganTolov =
              ((100 - elem.chegirmaFoiz) / 100) * 299000 - elem.tolov;
            break;
          }
          case "savodxonlik": {
            qolganTolov =
              ((100 - elem.chegirmaFoiz) / 100) * 199000 - elem.tolov;
            break;
          }
          case "inglizTili": {
            qolganTolov =
              ((100 - elem.chegirmaFoiz) / 100) * 199000 - elem.tolov;
            break;
          }
          case "python": {
            qolganTolov =
              ((100 - elem.chegirmaFoiz) / 100) * 199000 - elem.tolov;
            break;
          }
          default: {
            break;
          }
        }
        if (qolganTolov == 0) {
          return elem;
        }
      });
      return {
        ...state,
        studentsSuccess: newStudentSuccess,
      };
    }
    case "studentWarning": {
      const newStudentWarning = state.students.filter((elem) => {
        let qolganTolov;
        switch (elem.kurs) {
          case "animatsiya": {
            qolganTolov =
              ((100 - elem.chegirmaFoiz) / 100) * 299000 - elem.tolov;
            break;
          }
          case "front-end": {
            qolganTolov =
              ((100 - elem.chegirmaFoiz) / 100) * 299000 - elem.tolov;
            break;
          }
          case "savodxonlik": {
            qolganTolov =
              ((100 - elem.chegirmaFoiz) / 100) * 199000 - elem.tolov;
            break;
          }
          case "inglizTili": {
            qolganTolov =
              ((100 - elem.chegirmaFoiz) / 100) * 199000 - elem.tolov;
            break;
          }
          case "python": {
            qolganTolov =
              ((100 - elem.chegirmaFoiz) / 100) * 199000 - elem.tolov;
            break;
          }
          default: {
            break;
          }
        }
        if (qolganTolov != 0) {
          return elem;
        }
      });
      return {
        ...state,
        studentsWarning: newStudentWarning,
      };
    }
    case "deleteStudentAction": {
      const newStudents = state.students.filter(
        (elem) => elem.id !== action.payload
      );
      console.log("reducer", action.payload);
      return {
        ...state,
        students: newStudents,
      };
    }
    case "studentSuccessFilter": {
      const newStudentSuccess = state.students.filter((elem) => {
        let qolganTolov;
        switch (elem.kurs) {
          case "animatsiya": {
            qolganTolov =
              ((100 - elem.chegirmaFoiz) / 100) * 299000 - elem.tolov;
            break;
          }
          case "front-end": {
            qolganTolov =
              ((100 - elem.chegirmaFoiz) / 100) * 299000 - elem.tolov;
            break;
          }
          case "savodxonlik": {
            qolganTolov =
              ((100 - elem.chegirmaFoiz) / 100) * 199000 - elem.tolov;
            break;
          }
          case "inglizTili": {
            qolganTolov =
              ((100 - elem.chegirmaFoiz) / 100) * 199000 - elem.tolov;
            break;
          }
          case "python": {
            qolganTolov =
              ((100 - elem.chegirmaFoiz) / 100) * 199000 - elem.tolov;
            break;
          }
          default: {
            break;
          }
        }
        if (qolganTolov == 0 && elem.guruh == action.payload) {
          return elem;
        }
      });

      return {
        ...state,
        studentsSuccess: newStudentSuccess,
      };
    }
    case "studentWarningFilter": {
      const newStudentWarning = state.students.filter((elem) => {
        let qolganTolov;
        switch (elem.kurs) {
          case "animatsiya": {
            qolganTolov =
              ((100 - elem.chegirmaFoiz) / 100) * 299000 - elem.tolov;
            break;
          }
          case "front-end": {
            qolganTolov =
              ((100 - elem.chegirmaFoiz) / 100) * 299000 - elem.tolov;
            break;
          }
          case "savodxonlik": {
            qolganTolov =
              ((100 - elem.chegirmaFoiz) / 100) * 199000 - elem.tolov;
            break;
          }
          case "inglizTili": {
            qolganTolov =
              ((100 - elem.chegirmaFoiz) / 100) * 199000 - elem.tolov;
            break;
          }
          case "python": {
            qolganTolov =
              ((100 - elem.chegirmaFoiz) / 100) * 199000 - elem.tolov;
            break;
          }
          default: {
            break;
          }
        }
        if (qolganTolov != 0 && elem.guruh == action.payload) {
          return elem;
        }
      });

      return {
        ...state,
        studentsWarning: newStudentWarning,
      };
    }
    case "addStudent": {
      return {
        ...state,
        students: [...state.students, action.payload],
      };
    }

    default: {
      return state;
    }
  }
};

export default studentsReducer;
