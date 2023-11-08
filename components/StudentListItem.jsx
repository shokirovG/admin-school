import numberTrim from "@/hooks/number";
import useFetch from "@/hooks/useFetch";
import { deleteStudentAction } from "@/redux/actions/studentsAction";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

import FilterGroup from "./FilterKurs";
import FilterPrice from "./FilterPrice";
import ModalBtn from "./Modal";
import Modal from "./Modal";
import ModalChange from "./ModalChange";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
const firebaseConfig = {
  apiKey: "AIzaSyDWgfPMI0EpXMP-vHt29zNeI4JET3a0mc4",
  authDomain: "admin-school-238b0.firebaseapp.com",
  databaseURL: "https://admin-school-238b0-default-rtdb.firebaseio.com",
  projectId: "admin-school-238b0",
  storageBucket: "admin-school-238b0.appspot.com",
  messagingSenderId: "76098625843",
  appId: "1:76098625843:web:64741515e807e555d35e46",
};
firebase.initializeApp(firebaseConfig);
import setStore from "@/hooks/setStore";
import getMonth from "@/hooks/getMonth";
const StudentListItem = ({
  id,
  name,
  lastName,
  yosh,
  maktab,
  maktabDars,
  kursgaKelganVaqti,
  tel,
  manzil,
  kurs,
  tolov,
  chegirma,
  chegirmaFoiz,
  oqituvchisi,
  active,
  guruh,
  index,
  tolovSanasi,
}) => {
  let qilishiKerakTolov;
  let qolganTolov;
  let kursNarxi;
  const dispatch = useDispatch();
  const [db, setDb] = useState({});
  const { request } = useFetch();
  const store = useSelector((state) => state);
  switch (kurs) {
    case "animatsiya": {
      kursNarxi = 299000;
      qilishiKerakTolov = ((100 - chegirmaFoiz) / 100) * 299000;
      qolganTolov = ((100 - chegirmaFoiz) / 100) * 299000 - tolov;
      break;
    }
    case "front-end": {
      kursNarxi = 299000;
      qilishiKerakTolov = ((100 - chegirmaFoiz) / 100) * 299000;
      qolganTolov = ((100 - chegirmaFoiz) / 100) * 299000 - tolov;
      break;
    }
    case "savodxonlik": {
      kursNarxi = 199000;
      qilishiKerakTolov = ((100 - chegirmaFoiz) / 100) * 199000;
      qolganTolov = ((100 - chegirmaFoiz) / 100) * 199000 - tolov;
      break;
    }
    case "inglizTili": {
      kursNarxi = 199000;
      qilishiKerakTolov = ((100 - chegirmaFoiz) / 100) * 199000;
      qolganTolov = ((100 - chegirmaFoiz) / 100) * 199000 - tolov;
      break;
    }
    case "python": {
      kursNarxi = 149000;
      qilishiKerakTolov = ((100 - chegirmaFoiz) / 100) * 149000;
      qolganTolov = ((100 - chegirmaFoiz) / 100) * 149000 - tolov;
      break;
    }
    default: {
      kursNarxi = "sadad";
      qilishiKerakTolov = "asdsad";
      break;
    }
  }
  const props = {
    id,
    name,
    lastName,
    yosh,
    maktab,
    maktabDars,
    kursgaKelganVaqti,
    tel,
    manzil,
    kurs,
    tolov,
    chegirma,
    chegirmaFoiz,
    oqituvchisi,
    active,
    guruh,
    index,
    tolovSanasi,
    qolganTolov,
    kursNarxi,
    qilishiKerakTolov,
  };
  const deleteStudent = () => {
    const delStudent = store.students.filter((elem) => elem.id == id);
    const newStudents = store.students.filter((elem) => elem.id !== id);
    const newDb = {
      ...db,
      peoples: newStudents,
      dangerPeoples: [...db.dangerPeoples, ...delStudent],
    };
    // request(store.month, "PUT", JSON.stringify(newDb));
    if (db.peoples.length >= 2) {
      setStore(newDb);
      dispatch(deleteStudentAction(id));
      toast.error("O'quvchi o'chirildi!");
    }
  };
  useEffect(() => {
    const db = firebase.default.database();
    const month = db.ref("month");
    month.on("value", (m) => {
      const mon = db.ref(m.val().month);
      mon.on("value", (elem) => {
        console.log(elem.val());
        setDb(elem.val());
      });
      // request(store.month).then((res) => {
      //   setDb(res);
      // });
    });
  }, []);
  return (
    <>
      <ToastContainer />
      <table className="table child-table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th></th>
            <th></th>
            <th>Ismi</th>
            <th>Familiyasi</th>
            <th>yoshi</th>
            <th>maktab</th>
            <th>maktabDars</th>
            <th>o'qituvchisi</th>
            <th>kurs</th>
            <th>guruh</th>
            <th>qilgan to'lovi</th>
            <th>Kurs narxi</th>
            <th>chegirma Bilan Kurs Narxi</th>
            <th>qolgan to'lov</th>

            <th>chegirma(Foiz)</th>
            <th>tel</th>

            <th>manzil</th>
            <th>kursgaKelganVaqti</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{index}</th>
            <td>
              <ModalBtn {...props} />
            </td>
            <td>
              <ModalChange {...props} />
            </td>
            <td>{name}</td>
            <td>{lastName}</td>
            <td>{yosh}</td>
            <td>{maktab}</td>
            <td>{maktabDars}</td>
            <td>{oqituvchisi}</td>
            <td>{kurs}</td>
            <td>{guruh}</td>

            <td>
              {numberTrim(tolov) + " so'm"} <br /> {tolovSanasi}
            </td>
            <td>{numberTrim(kursNarxi)} so'm</td>
            <td>{numberTrim(qilishiKerakTolov)} so'm</td>
            <td className={qolganTolov === 0 ? "bg-success" : "bg-danger"}>
              {numberTrim(qolganTolov)} so'm
            </td>

            <td>{chegirmaFoiz}</td>
            <td>{tel}</td>

            <td>{manzil}</td>
            <td>{kursgaKelganVaqti}</td>
            <td>
              <button
                type="button"
                className="btn btn-danger"
                onClick={deleteStudent}
              >
                O'chirish
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default StudentListItem;
