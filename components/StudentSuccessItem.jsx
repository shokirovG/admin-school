import numberTrim from "@/hooks/number";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import FilterGroup from "./FilterKurs";
import FilterPrice from "./FilterPrice";
import ModalBtn from "./Modal";
import Modal from "./Modal";
import ModalChange from "./ModalChange";

const StudentSuccessItem = ({
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
  };
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
      kursNarxi = 0;
      qilishiKerakTolov = 0;
      break;
    }
  }
  const store = useSelector((state) => state);
  let currentCount;
  const todayPrice = () => {
    const date = new Date();
    const currentDate =
      date.getFullYear() +
      "/" +
      Number(date.getMonth() + 1) +
      "/" +
      date.getDate();
    console.log(currentDate);
    const currentDb = store.studentsSuccess.filter((elem) => {
      if (elem.tolovSanasi == currentDate) {
        return elem;
      }
    });
    currentCount = currentDb.length;
    return currentDb.reduce((s, item) => {
      return s + item.tolov;
    }, 0);
  };
  todayPrice();
  const totalPrice = () => {
    return store.studentsSuccess.reduce((s, item) => {
      return s + item.tolov;
    }, 0);
  };
  totalPrice();

  return (
    <div className="success__item">
      <div className="success__footer">
        <h5 className="text-info">
          Bugun to'lov qilganlar: ({currentCount} kishi){" "}
          {numberTrim(todayPrice())} so'm
        </h5>
        <h5 className="text-success">
          Umumiy to'lov: ({store.studentsSuccess.length} kishi){" "}
          {numberTrim(totalPrice())} so'm
        </h5>
      </div>
      <table className="table child-table">
        <thead>
          <tr>
            <th scope="col">#</th>

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
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{index}</th>

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
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StudentSuccessItem;
