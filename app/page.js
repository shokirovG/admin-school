"use client";

import { useEffect } from "react";
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
export default function Home() {
  useEffect(() => {}, []);
  const addHandle = () => {
    const db = firebase.default.database();
    db.ref("sentabr").update({
      peoples: [
        {
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
          id: 2131231,
        },
      ],
      dangerPeoples: [
        {
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
          id: 2131231,
        },
      ],
    });
  };
  return <>{/* <button onClick={addHandle}>Add</button> */}</>;
}
