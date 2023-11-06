import useFetch from "@/hooks/useFetch";
import { changeStudent } from "@/redux/actions/studentsAction";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

function ModalChange({
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
  guruh,
  index,
  tolovSanasi,
}) {
  const [nameV, setName] = useState(name);
  const [lastNameV, setLastName] = useState(lastName);
  const [yoshV, setYosh] = useState(yosh);
  const [maktabV, setMaktab] = useState(maktab);
  const [maktabDarsV, setMaktabDars] = useState(maktabDars);
  const [kursgaKelganVaqtiV, setKursgaKelganVaqti] =
    useState(kursgaKelganVaqti);
  const [telV, setTel] = useState(tel);
  const [manzilV, setManzil] = useState(manzil);
  const [kursV, setKurs] = useState(kurs);
  const [tolovV, setTolov] = useState(tolov);
  const [chegirmaV, setChegirma] = useState(chegirma);
  const [chegirmaFoizV, setChegirmaFoiz] = useState(chegirmaFoiz);
  const [oqituvchisiV, setOqituvchi] = useState(oqituvchisi);
  const [guruhV, setGuruh] = useState(guruh);
  const [tolovSanasiV, setTolovSanasi] = useState(tolovSanasi);
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const { request } = useFetch();
  const [db, setDb] = useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => {
    const newStudents = store.students.map((elem) => {
      if (elem.id === id) {
        return {
          ...elem,
          id: id,
          name: nameV,
          lastName: lastNameV,
          yosh: yoshV,
          maktab: maktabV,
          maktabDars: maktabDarsV,
          kursgaKelganVaqti: kursgaKelganVaqtiV,
          tel: telV,
          manzil: manzilV,
          kurs: kursV,
          tolov: tolovV,
          chegirma: chegirmaV,
          chegirmaFoiz: chegirmaFoizV,
          oqituvchisi: oqituvchisiV,
          guruh: guruhV,
          index: index,
          tolovSanasi: tolovSanasiV,
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
    dispatch(
      changeStudent({
        nameV,
        lastNameV,
        yoshV,
        maktabV,
        maktabDarsV,
        kursgaKelganVaqtiV,
        telV,
        manzilV,
        kursV,
        tolovV,
        chegirmaV,
        chegirmaFoizV,
        oqituvchisiV,
        guruhV,
        id,
        index,
        tolovSanasiV,
      })
    );
    setShow(false);
    toast.warning("Taxrirlandi!");
  };
  const handleShow = () => setShow(true);
  useEffect(() => {
    request(store.month).then((res) => {
      setDb(res);
    });
  }, []);
  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Taxrirlash
      </Button>
      <ToastContainer />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Taxrirlash</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            id="inputPassword1"
            className="form-control"
            value={nameV}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            id="inputPassword2"
            className="form-control"
            value={lastNameV}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <input
            type="text"
            id="inputPassword3"
            className="form-control"
            value={yoshV}
            onChange={(e) => {
              setYosh(e.target.value);
            }}
          />
          <input
            type="text"
            id="inputPassword4"
            className="form-control"
            value={maktabV}
            onChange={(e) => {
              setMaktab(e.target.value);
            }}
          />
          <input
            type="text"
            id="inputPassword5"
            className="form-control"
            value={maktabDarsV}
            onChange={(e) => {
              setMaktabDars(e.target.value);
            }}
          />
          <input
            type="text"
            id="inputPassword6"
            className="form-control"
            value={kursgaKelganVaqtiV}
            onChange={(e) => {
              setKursgaKelganVaqti(e.target.value);
            }}
          />
          <input
            type="text"
            id="inputPassword7"
            className="form-control"
            value={telV}
            onChange={(e) => {
              setTel(e.target.value);
            }}
          />
          <input
            type="text"
            id="inputPassword8"
            className="form-control"
            value={manzilV}
            onChange={(e) => {
              setManzil(e.target.value);
            }}
          />
          <input
            type="text"
            id="inputPassword9"
            className="form-control"
            value={kursV}
            onChange={(e) => {
              setKurs(e.target.value);
            }}
          />
          <input
            type="text"
            id="inputPassword10"
            className="form-control"
            value={tolovV}
            onChange={(e) => {
              setTolov(e.target.value);
            }}
          />
          <input
            type="text"
            id="inputPassword11"
            className="form-control"
            value={chegirmaV}
            onChange={(e) => {
              setChegirma(e.target.value);
            }}
          />
          <input
            type="text"
            id="inputPassword12"
            className="form-control"
            value={chegirmaFoizV}
            onChange={(e) => {
              setChegirmaFoiz(e.target.value);
            }}
          />
          <input
            type="text"
            id="inputPassword13"
            className="form-control"
            value={oqituvchisiV}
            onChange={(e) => {
              setOqituvchi(e.target.value);
            }}
          />
          <input
            type="text"
            id="inputPassword14"
            className="form-control"
            value={guruhV}
            onChange={(e) => {
              setGuruh(e.target.value);
            }}
          />
          <input
            type="text"
            id="inputPassword15"
            className="form-control"
            value={tolovSanasiV}
            onChange={(e) => {
              setTolovSanasi(e.target.value);
            }}
          />
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

export default ModalChange;
