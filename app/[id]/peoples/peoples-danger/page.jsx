"use client";

import Loader from "@/components/Loader";
import StudentDangerParent from "@/components/StudentDangerParent";
import StudentListParent from "@/components/StudentListParent";
import useFetch from "@/hooks/useFetch";
import {
  saveMonth,
  studentsFetched,
  studentsFetching,
} from "@/redux/actions/studentsAction";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = ({ params }) => {
  const dispatch = useDispatch();
  const { request } = useFetch();
  const store = useSelector((state) => state);
  useEffect(() => {
    dispatch(saveMonth(params.id));
    dispatch(studentsFetching());

    request(params.id).then((data) => {
      dispatch(studentsFetched(data.dangerPeoples));
    });
  }, []);

  return (
    <>{store.loading == "loaded" ? <StudentDangerParent /> : <Loader />}</>
  );
};

export default page;
