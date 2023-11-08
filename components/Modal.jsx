import numberTrim from "@/hooks/number";
import useFetch from "@/hooks/useFetch";
import { payment } from "@/redux/actions/studentsAction";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import { ToastContainer, toast } from "react-toastify";
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

const db = firebase.default.database();
function ModalBtn({
  id,
  name,
  lastName,
  kurs,
  chegirmaFoiz,
  qolganTolov,
  guruh,
  tolov,
  kursNarxi,
  qilishiKerakTolov,
}) {
  const [show, setShow] = useState(false);
  const [pay, setPay] = useState("");
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const { request } = useFetch();
  const [DataBase, setDb] = useState({});
  const [payWarning, setPayWarning] = useState(false);
  const closeModal = () => {
    setShow(false);
  };
  const handleClose = () => {
    setPayWarning(false);
    if (pay > qolganTolov) {
      setPayWarning(true);
    } else {
      if (pay !== "") {
        const date = new Date();
        const newStudents = store.students.map((elem) => {
          if (elem.id === id) {
            return {
              ...elem,
              tolov: Number(elem.tolov) + Number(pay),
              tolovSanasi: `${date.getFullYear()}/${
                date.getMonth() + 1
              }/${date.getDate()}`,
            };
          } else {
            return elem;
          }
        });
        const newDb = {
          ...DataBase,
          peoples: newStudents,
        };
        // request(store.month, "PUT", JSON.stringify(newDb));

        const month = db.ref("month");
        month.on("value", (m) => {
          db.ref(m.val().month).update(newDb);
          // dispatch(payment(id, pay));
          console.log("payment");
          toast.info("to'lov qabul qilindi!");
        });

        setShow(false);

        setPay("");
      }
    }
  };
  const handleShow = () => {
    setShow(true);
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
      <Button variant="success" onClick={handleShow}>
        To'lov
      </Button>

      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton onClick={closeModal}>
          <Modal.Title>To'lov</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>
            Ismi: {name} <br />
            Familiyasi: {lastName} <br />
            kursi: {kurs} <br />
            guruhi: {guruh} <br />
            kurs Narxi: {numberTrim(kursNarxi)} so'm <br />
            chegirma Foizi: {chegirmaFoiz} <br />
            chegirma Bilan Kurs Narxi: {numberTrim(qilishiKerakTolov)} so'm{" "}
            <br />
            oldindan qilgan to'lovi: {numberTrim(tolov)} so'm <br />
            qolgan To'lov: {numberTrim(qolganTolov)} so'm
          </h5>

          {qolganTolov > 0 ? (
            <>
              <label>To'lov qiymati:</label>
              <input
                type="number"
                id="inputPassword6"
                className="form-control"
                aria-describedby="passwordHelpInline"
                onChange={(e) => {
                  setPay(e.target.value);
                }}
                value={pay}
              />
              {payWarning ? (
                <p className="text-danger">
                  Iltimos {numberTrim(qolganTolov)} so'mdan ko'p qiymat
                  kiritmang!
                </p>
              ) : null}
            </>
          ) : null}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Saqlash
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalBtn;
