import useFetch from "@/hooks/useFetch";
import {
  addStudent,
  saveMonth,
  studentsFetched,
  studentsFetching,
} from "@/redux/actions/studentsAction";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import getMonth from "@/hooks/getMonth";
import getStore from "@/hooks/getStore";
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
const AddStudent = ({ params }) => {
  const [show, setShow] = useState(false);
  const [values, setValues] = useState({
    name: "",
    lastName: "",
    yosh: "",
    maktab: "",
    maktabDars: "",
    kursgaKelganVaqti: "",
    tel: "",
    tolov: "",
    chegirma: "",
    chegirmaFoiz: "",
    oqituvchisi: "",
    tolovSanasi: "",
    kurs: "",
    guruh: "",
    manzil: "",
    active: true,
    id: v4(),
  });
  const [DataBase, setDb] = useState({
    peoples: [],
  });
  const { request } = useFetch();
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  const handleValue = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSave = () => {
    setShow(false);
    const newStudent = {
      ...values,
      id: v4(),
      active: true,
    };
    const newStudents = {
      ...DataBase,
      peoples: [...DataBase.peoples, newStudent],
    };

    const db = firebase.default.database();
    console.log(getStore());
    console.log(getMonth());
    db.ref(getMonth()).update(newStudents);
    toast.success("Yangi o'quvchi qo'shildi!");
    // request(store.month, "PUT", JSON.stringify(newStudents))
    //   .then(() => {
    //     dispatch(addStudent(newStudent));

    //     toast.success("Yangi o'quvchi qo'shildi!");
    //   })
    //   .catch((err) => {
    //     toast.error("O'quvchi qo'shilmadi!");
    //   });
  };
  useEffect(() => {
    // request(store.month).then((res) => {
    //   setDb(res);
    // });
    const db = firebase.default.database();
    const month = db.ref("month");
    month.on("value", (m) => {
      const mon = db.ref(m.val().month);
      mon.on("value", (elem) => {
        console.log(elem.val());
        setDb(elem.val());
      });
    });
  }, []);
  return (
    <>
      <ToastContainer />
      <Button variant="success" onClick={handleShow}>
        o'quvchi qo'shish
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Yangi o'quvchi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <input
              required
              type="text"
              placeholder="ismi"
              value={values.name}
              name="name"
              onChange={handleValue}
              class="form-control"
            />
            <input
              type="text"
              placeholder="familiyasi"
              value={values.lastName}
              name="lastName"
              onChange={handleValue}
              required
              class="form-control"
            />
            <input
              onChange={handleValue}
              type="text"
              placeholder="yoshi"
              value={values.yosh}
              name="yosh"
              required
              class="form-control"
            />
            <input
              type="text"
              placeholder="maktabi"
              value={values.maktab}
              name="maktab"
              onChange={handleValue}
              required
              class="form-control"
            />
            <input
              type="text"
              placeholder="maktab dars vaqti"
              value={values.maktabDars}
              name="maktabDars"
              onChange={handleValue}
              required
              class="form-control"
            />
            <input
              type="text"
              placeholder="kursga kelgan vaqti"
              value={values.kursgaKelganVaqti}
              name="kursgaKelganVaqti"
              onChange={handleValue}
              required
              class="form-control"
            />
            <input
              onChange={handleValue}
              type="text"
              placeholder="tel"
              value={values.tel}
              name="tel"
              required
              class="form-control"
            />

            <input
              type="text"
              placeholder="qancha to'lov qilgani"
              value={values.tolov}
              name="tolov"
              onChange={handleValue}
              required
              class="form-control"
            />
            <input
              type="text"
              placeholder="chegirma"
              value={values.chegirma}
              name="chegirma"
              onChange={handleValue}
              required
              class="form-control"
            />
            <input
              type="text"
              placeholder="chegirma foizi"
              value={values.chegirmaFoiz}
              name="chegirmaFoiz"
              onChange={handleValue}
              required
              class="form-control"
            />
            <input
              type="text"
              placeholder="o'qituvchisi"
              value={values.oqituvchisi}
              name="oqituvchisi"
              onChange={handleValue}
              required
              class="form-control"
            />

            <input
              type="text"
              placeholder="to'lov sanasi"
              value={values.tolovSanasi}
              name="tolovSanasi"
              onChange={handleValue}
              required
              class="form-control"
            />

            <select
              name="kurs"
              onChange={handleValue}
              required
              class="form-select"
            >
              <option disabled selected>
                Kurs
              </option>
              <option value="front-end">front-end</option>
              <option value="inglizTili">inglizTili</option>
              <option value="savodxonlik">savodxonlik</option>
              <option value="python">python</option>
              <option value="animatsiya">animatsiya</option>
            </select>
            <select
              name="guruh"
              id=""
              onChange={handleValue}
              required
              class="form-select"
            >
              <option value="" disabled selected>
                guruh
              </option>
              <option value="front-5">front-5</option>
              <option value="front-6">front-6</option>
              <option value="front-8">front-8</option>
              <option value="front-10">front-10</option>
              <option value="front-11">front-11</option>
              <option value="front-12">front-12</option>
              <option value="front-13">front-13</option>
              <option value="animatsiya-1">animatsiya-1</option>
              <option value="savodxonlik-1">savodxonlik-1</option>
              <option value="inglizTili-1">inglizTili-1</option>
            </select>

            <textarea
              cols="30"
              rows="5"
              placeholder="manzil"
              value={values.manzil}
              name="manzil"
              onChange={handleValue}
              required
              className="form-control"
            ></textarea>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Bekor qilish
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Saqlash
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddStudent;
