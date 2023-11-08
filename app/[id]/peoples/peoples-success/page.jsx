"use client";

import Loader from "@/components/Loader";
import StudentListParent from "@/components/StudentListParent";
import StudentSuccessParent from "@/components/StudentSuccessParent";
import getMonth from "@/hooks/getMonth";
import getStore from "@/hooks/getStore";
import useFetch from "@/hooks/useFetch";
import {
  saveMonth,
  studentsFetched,
  studentsFetching,
  studentSuccess,
} from "@/redux/actions/studentsAction";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
const page = ({ params }) => {
  const dispatch = useDispatch();
  const [dis, setDis] = useState([]);
  const store = useSelector((state) => state);

  useEffect(() => {
    // dispatch(saveMonth(params.id));
    const db = firebase.default.database();
    dispatch(studentsFetching());
    const storeFire = db.ref(params.id);
    storeFire.on("value", (elem) => {
      console.log("page", elem.val().peoples);
      dispatch(studentsFetched(elem.val().peoples));
    });

    dispatch(studentSuccess());
    // request(params.id).then((data) => {

    // });
  }, []);

  return (
    <>{store.loading == "loaded" ? <StudentSuccessParent /> : <Loader />}</>
  );
};

export default page;
