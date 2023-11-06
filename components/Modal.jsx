import numberTrim from "@/hooks/number";
import useFetch from "@/hooks/useFetch";
import { payment } from "@/redux/actions/studentsAction";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
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
  const [db, setDb] = useState({});
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
          ...db,
          peoples: newStudents,
        };
        request(store.month, "PUT", JSON.stringify(newDb));
        dispatch(payment(id, pay));
        setShow(false);
        toast.info("to'lov qabul qilindi!");
        setPay("");
      }
    }
  };
  const handleShow = () => {
    setShow(true);
  };
  useEffect(() => {
    request(store.month).then((res) => {
      setDb(res);
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
